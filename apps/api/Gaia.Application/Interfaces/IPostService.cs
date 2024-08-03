using Gaia.Application.DTOs;
using Gaia.Application.DTOs.PostDTOs;
using System.Security.Claims;

namespace Gaia.Application.Interfaces
{
    public interface IPostService
    {
        Task<ServiceResponse<PostResponse>> CreatePostAsync(PostRequest postRequest, ClaimsPrincipal user);
        public Task<ServiceResponse<IEnumerable<PostResponse>>> GetPostsAsync();

    }
}
