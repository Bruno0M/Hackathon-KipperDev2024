namespace Gaia.Application.DTOs.PostDTOs
{
    public record PostResponse(
        Guid Id,
        string PostUrl,
        string Description,
        string Username);
}