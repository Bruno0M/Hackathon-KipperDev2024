using Gaia.Application.DTOs;
using Gaia.Application.DTOs.PostDTOs;
using Gaia.Application.Interfaces;
using Gaia.Domain.Entities;
using Gaia.Domain.Repositories;
using System.Net;

namespace Gaia.Application.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;

        public PostService(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public async Task<ServiceResponse<PostResponse>> CreatePostAsync(PostRequest postRequest)
        {
            ServiceResponse<PostResponse> response = new();

            Post post = new Post()
            {
                Description = postRequest.Description,
                PostUrl = postRequest.PostUrl,
            };

            await _postRepository.CreatePostAsync(post);

            var postResponse = new PostResponse(
                post.Id,
                post.PostUrl,
                post.Description,
                post.User.UserName);

            response.Data = postResponse;
            response.Message = "Post succesfully created";
            response.Status = HttpStatusCode.OK;

            return response;
        }
    }
}
