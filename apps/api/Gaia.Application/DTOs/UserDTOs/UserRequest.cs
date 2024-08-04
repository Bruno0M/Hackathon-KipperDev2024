using Microsoft.AspNetCore.Http;

namespace Gaia.Application.DTOs.UserDTOs
{
    public record UserRequest(
        string Username,
        string Email,
        IFormFile ProfileUrl,
        string Password,
        string ConfirmPassword);
}