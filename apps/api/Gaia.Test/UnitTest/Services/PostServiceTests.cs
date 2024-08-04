using Gaia.Application.DTOs.PostDTOs;
using Gaia.Application.DTOs;
using Gaia.Application.Interfaces;
using Gaia.Application.Services;
using Gaia.Domain.Entities;
using Gaia.Domain.Repositories;
using Microsoft.AspNetCore.Identity;
using Moq;
using System.Net;
using System.Security.Claims;

namespace Gaia.Test.UnitTest.Services
{
    public class PostServiceTests
    {
        private readonly Mock<IPostRepository> _postRepositoryMock;
        private readonly Mock<UserManager<ApplicationUser>> _userManagerMock;
        private readonly Mock<IImgurService> _imgurServiceMock;
        private readonly PostService _service;

        public PostServiceTests()
        {
            _postRepositoryMock = new Mock<IPostRepository>();
            _userManagerMock = new Mock<UserManager<ApplicationUser>>(
                Mock.Of<IUserStore<ApplicationUser>>(),
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            );
            _imgurServiceMock = new Mock<IImgurService>();
            _service = new PostService(_postRepositoryMock.Object, _userManagerMock.Object, _imgurServiceMock.Object);
        }

        [Fact]
        public async Task CreatePostAsync_ShouldReturnSuccess_WhenPostIsCreated()
        {
            // Arrange
            var postRequest = new PostRequest(Image: null, Description: "Test description");
            var userId = Guid.NewGuid();
            var user = new ApplicationUser { Id = userId, UserName = "TestUser" };
            var postUrl = "http://example.com";
            var postResponse = new ServiceResponse<PostResponse>
            {
                Data = new PostResponse(Guid.NewGuid(), userId, postUrl, "Test description", "TestUser"),
                Message = "Post successfully created",
                Status = HttpStatusCode.OK
            };

            _userManagerMock.Setup(x => x.GetUserAsync(It.IsAny<ClaimsPrincipal>())).ReturnsAsync(user);
            _imgurServiceMock.Setup(x => x.UploadImageAsync(postRequest.Image)).ReturnsAsync(postUrl);
            _postRepositoryMock.Setup(x => x.CreatePostAsync(It.IsAny<Post>())).Returns(Task.CompletedTask);

            // Act
            var result = await _service.CreatePostAsync(postRequest, new ClaimsPrincipal()) as ServiceResponse<PostResponse>;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(HttpStatusCode.OK, result.Status);
            Assert.Equal("Post successfully created", result.Message);
            Assert.Equal("Test description", result.Data.Description);
        }

        [Fact]
        public async Task GetPostsAsync_ShouldReturnPosts_WhenPostsAreRetrieved()
        {
            // Arrange
            var post = new Post { Id = Guid.NewGuid(), PostUrl = "http://example.com", Description = "Test description", UserId = Guid.NewGuid(), User = new ApplicationUser { UserName = "TestUser" } };
            var posts = new List<Post> { post };
            var postResponses = new ServiceResponse<IEnumerable<PostResponse>>
            {
                Data = posts.Select(p => new PostResponse(p.Id, p.UserId, p.PostUrl, p.Description, p.User.UserName)),
                Status = HttpStatusCode.OK
            };

            _postRepositoryMock.Setup(x => x.GetPostsAsync()).ReturnsAsync(posts);

            // Act
            var result = await _service.GetPostsAsync() as ServiceResponse<IEnumerable<PostResponse>>;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(HttpStatusCode.OK, result.Status);
            Assert.True(result.Data.Any());
            Assert.Equal("Test description", result.Data.First().Description);
        }
    }
}
