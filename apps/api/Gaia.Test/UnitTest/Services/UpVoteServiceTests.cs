using Gaia.Application.Interfaces;
using Gaia.Application.Services;
using Gaia.Domain.Entities;
using Gaia.Domain.Repositories;
using Microsoft.AspNetCore.Identity;
using Moq;
using System.Security.Claims;

namespace Gaia.Test.UnitTest.Services
{
    public class UpVoteServiceTests
    {
        private readonly Mock<IUpVoteRepository> _upVoteRepositoryMock;
        private readonly Mock<UserManager<ApplicationUser>> _userManagerMock;
        private readonly Mock<IPostRepository> _postRepositoryMock;
        private readonly IUpVoteService _upVoteService;

        public UpVoteServiceTests()
        {
            _upVoteRepositoryMock = new Mock<IUpVoteRepository>();
            _userManagerMock = new Mock<UserManager<ApplicationUser>>(
                Mock.Of<IUserStore<ApplicationUser>>(), null, null, null, null, null, null, null, null);
            _postRepositoryMock = new Mock<IPostRepository>();
            _upVoteService = new UpVoteService(_upVoteRepositoryMock.Object, _userManagerMock.Object, _postRepositoryMock.Object);
        }

        [Fact]
        public async Task ToggleUpVoteAsync_ShouldAddUpVote_WhenNotAlreadyUpVoted()
        {
            // Arrange
            var userId = Guid.NewGuid();
            var postId = Guid.NewGuid();
            var user = new ApplicationUser { Id = userId };
            var post = new Post { Id = postId, UpVotes = new List<UpVote>() };
            var claimsPrincipal = new ClaimsPrincipal(new ClaimsIdentity(new Claim[]
            {
            new Claim(ClaimTypes.NameIdentifier, userId.ToString())
            }));

            _userManagerMock.Setup(x => x.GetUserAsync(claimsPrincipal)).ReturnsAsync(user);
            _postRepositoryMock.Setup(x => x.GetPostWithUpVotesAsync(postId)).ReturnsAsync(post);
            _upVoteRepositoryMock.Setup(x => x.GetUpVoteAsync(postId, userId)).ReturnsAsync((UpVote)null);

            // Act
            var result = await _upVoteService.ToggleUpVoteAsync(postId, claimsPrincipal);

            // Assert
            _upVoteRepositoryMock.Verify(x => x.UpVotePostAsync(It.IsAny<UpVote>()), Times.Once);
            Assert.Equal(1, result);
        }
    }
}
