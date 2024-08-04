using Gaia.API.Controllers;
using Gaia.Application.DTOs.PostDTOs;
using Gaia.Application.DTOs;
using Gaia.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Security.Claims;

namespace Gaia.Test.UnitTest.Controllers
{
    public class PostsControllerTests
    {
        private readonly Mock<IPostService> _postServiceMock;
        private readonly Mock<IImgurService> _imgurServiceMock;
        private readonly PostsController _controller;

        public PostsControllerTests()
        {
            _postServiceMock = new Mock<IPostService>();
            _imgurServiceMock = new Mock<IImgurService>();
            _controller = new PostsController(_postServiceMock.Object, _imgurServiceMock.Object);
        }

        [Fact]
        public async Task Create_ShouldReturnOk_WhenPostIsCreated()
        {
            // Arrange
            var postRequest = new PostRequest(Image: null, Description: "Test description");
            var claimsPrincipal = new ClaimsPrincipal(); // Simule o usuário autenticado
            var postResponse = new ServiceResponse<PostResponse>
            {
                Data = new PostResponse(Guid.NewGuid(), Guid.NewGuid(), "http://example.com", "Test description", "TestUser"),
                Message = "Post successfully created",
                Status = System.Net.HttpStatusCode.OK
            };
            _postServiceMock.Setup(x => x.CreatePostAsync(postRequest, It.IsAny<ClaimsPrincipal>()))
                .ReturnsAsync(postResponse);

            // Act
            var result = await _controller.Create(postRequest) as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            var responseData = result.Value as ServiceResponse<PostResponse>;
            Assert.NotNull(responseData);
            Assert.Equal("Post successfully created", responseData.Message);
        }

        [Fact]
        public async Task Get_ShouldReturnOk_WhenPostsAreRetrieved()
        {
            // Arrange
            var postResponses = new ServiceResponse<IEnumerable<PostResponse>>
            {
                Data = new List<PostResponse> { new PostResponse(Guid.NewGuid(), Guid.NewGuid(), "http://example.com", "Test description", "TestUser") },
                Status = System.Net.HttpStatusCode.OK
            };
            _postServiceMock.Setup(x => x.GetPostsAsync()).ReturnsAsync(postResponses);

            // Act
            var result = await _controller.Get() as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            var responseData = result.Value as ServiceResponse<IEnumerable<PostResponse>>;
            Assert.NotNull(responseData);
            Assert.True(responseData.Data.Any());
        }

    }
}
