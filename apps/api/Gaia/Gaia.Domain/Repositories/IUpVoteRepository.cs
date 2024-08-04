using Gaia.Domain.Entities;

namespace Gaia.Domain.Repositories
{
    public interface IUpVoteRepository
    {
        Task UpVotePostAsync(UpVote upVote);
        Task RemoveUpVoteAsync(Guid upVoteId);
        Task<UpVote> GetUpVoteAsync(Guid postId, Guid userId);
    }
}
