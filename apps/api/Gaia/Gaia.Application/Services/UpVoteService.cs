using Gaia.Application.Interfaces;
using Gaia.Domain.Entities;
using Gaia.Domain.Repositories;
using Microsoft.AspNetCore.Identity;
using System.Net;
using System.Security.Claims;

namespace Gaia.Application.Services
{
    public class UpVoteService : IUpVoteService
    {
        private readonly IUpVoteRepository _upVoteRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IPostRepository _postRepository;


        public UpVoteService(IUpVoteRepository upVoteRepository, UserManager<ApplicationUser> userManager, IPostRepository postRepository)
        {
            _upVoteRepository = upVoteRepository;
            _userManager = userManager;
            _postRepository = postRepository;
        }

        public async Task<int> ToggleUpVoteAsync(Guid postId, ClaimsPrincipal user)
        {
            var userM = _userManager.GetUserAsync(user).Result;

            var post = await _postRepository.GetPostWithUpVotesAsync(postId);
            var upVoteCount = post.GetUpVoteCount();

            if (userM == null) return upVoteCount;

            var upVote = await _upVoteRepository.GetUpVoteAsync(postId, userM.Id);
            if (upVote == null)
            {
                var newUpVote = new UpVote()
                {
                    PostId = postId,
                    UserId = userM.Id,
                };

                await _upVoteRepository.UpVotePostAsync(newUpVote);
            }
            else
            {
                await _upVoteRepository.RemoveUpVoteAsync(upVote.Id);
            }

            return upVoteCount;

        }
    }
}
