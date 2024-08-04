using Gaia.Application.DTOs;
using Gaia.Application.DTOs.PostDTOs;
using Gaia.Application.Interfaces;
using Gaia.Domain.Entities;
using Gaia.Domain.Repositories;
using Microsoft.AspNetCore.Identity;
using System.Net;
using System.Security.Claims;

namespace Gaia.Application.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IImgurService _imgurService;

        public PostService(IPostRepository postRepository, UserManager<ApplicationUser> userManager, IImgurService imgurService)
        {
            _postRepository = postRepository;
            _userManager = userManager;
            _imgurService = imgurService;
        }

        public async Task<ServiceResponse<PostResponse>> CreatePostAsync(PostRequest postRequest, ClaimsPrincipal user)
        {
            ServiceResponse<PostResponse> response = new();

            var userM = _userManager.GetUserAsync(user).Result;

            if (user == null)
            {
                response.Message = "User not found";
                response.Status = HttpStatusCode.NotFound;
            }

            var postUrl = await _imgurService.UploadImageAsync(postRequest.Image);

            Post post = new Post()
            {
                UserId = userM.Id,
                Description = postRequest.Description,
                PostUrl = postUrl
            };

            await _postRepository.CreatePostAsync(post);

            var postResponse = new PostResponse(
                post.Id,
                post.UserId,
                post.PostUrl,
                post.Description,
                userM.UserName);

            response.Data = postResponse;
            response.Message = "Post succesfully created";
            response.Status = HttpStatusCode.OK;

            return response;
        }

        public async Task<ServiceResponse<IEnumerable<PostResponse>>> GetPostsAsync()
        {
            ServiceResponse<IEnumerable<PostResponse>> response = new();

            var post = await _postRepository.GetPostsAsync();

            var postResponse = post.Select(p => new PostResponse(
                p.Id,
                p.UserId,
                p.PostUrl,
                p.Description,
                p.User?.UserName));

            response.Data = postResponse;
            response.Status = HttpStatusCode.OK;

            return response;
        }
    }
}
