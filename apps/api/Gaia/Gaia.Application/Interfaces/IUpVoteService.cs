using System.Security.Claims;

namespace Gaia.Application.Interfaces
{
    public interface IUpVoteService
    {
        Task<int> ToggleUpVoteAsync(Guid postId, ClaimsPrincipal user);

    }
}
