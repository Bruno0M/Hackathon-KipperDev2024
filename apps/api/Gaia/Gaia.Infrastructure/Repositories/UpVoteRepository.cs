using Gaia.Domain.Entities;
using Gaia.Domain.Repositories;
using Gaia.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Gaia.Infrastructure.Repositories
{
    public class UpVoteRepository : IUpVoteRepository
    {
        private readonly AppDbContext _context;

        public UpVoteRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task UpVotePostAsync(UpVote upVote)
        {
            await _context.UpVotes.AddAsync(upVote);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveUpVoteAsync(Guid upVoteId)
        {
            var upVote = await _context.UpVotes.FindAsync(upVoteId);

            if (upVote != null)
            {
                _context.UpVotes.Remove(upVote);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<UpVote> GetUpVoteAsync(Guid postId, Guid userId)
        {
            return await _context.UpVotes
                .FirstOrDefaultAsync(l => l.PostId == postId && l.UserId == userId);
        }
    }
}
