using Gaia.Domain.Entities;
using Gaia.Domain.Repositories;
using Gaia.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Gaia.Infrastructure.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly AppDbContext _context;

        public PostRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreatePostAsync(Post post)
        {
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Post>> GetPostsAsync()
        {
            return await _context.Posts
                .AsNoTracking()
                .Include(p => p.User)
                .ToListAsync();
        }
    }
}