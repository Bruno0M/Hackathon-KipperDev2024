using Gaia.Application.DTOs;
using Gaia.Application.DTOs.PostDTOs;

namespace Gaia.Application.Interfaces
{
    public interface IPostService
    {
        Task<ServiceResponse<PostResponse>> CreatePostAsync(PostRequest postRequest);
    }
}
