namespace Hackaton.Application.DTOs.UserDTOs
{
    public record UserRequest(
        string Username,
        string Email,
        string Password,
        string ConfirmPassword);
}
