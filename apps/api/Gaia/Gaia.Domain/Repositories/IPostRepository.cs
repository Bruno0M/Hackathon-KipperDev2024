using Gaia.Domain.Entities;

namespace Gaia.Domain.Repositories
{
    public interface IPostRepository
    {
        Task CreatePostAsync(Post post);
        Task<IEnumerable<Post>> GetPostsAsync();
        Task<Post> GetPostWithUpVotesAsync(Guid postId);
    }
}