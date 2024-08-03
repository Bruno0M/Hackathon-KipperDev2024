namespace Gaia.Application.DTOs.UserDTOs
{
    public record UserRequest(
        string Username,
        string Email,
        string? ProfileUrl,
        string Password,
        string ConfirmPassword);
}