using Microsoft.AspNetCore.Http;

namespace Gaia.Application.DTOs.PostDTOs
{
    public record PostRequest(
        IFormFile Image,
        string Description);
}
