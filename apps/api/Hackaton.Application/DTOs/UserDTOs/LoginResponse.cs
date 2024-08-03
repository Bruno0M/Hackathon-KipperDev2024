namespace Hackaton.Application.DTOs.UserDTOs
{
    public record LoginResponse(
        Guid Id,
        string Username,
        string Token);
}
