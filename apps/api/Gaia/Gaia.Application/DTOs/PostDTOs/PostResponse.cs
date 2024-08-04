namespace Gaia.Application.DTOs.PostDTOs
{
    public record PostResponse(
        Guid Id,
        Guid UserId,
        string PostUrl,
        string Description,
        string Author);
}