using Gaia.Domain.Entities;

namespace Gaia.Domain.Repositories
{
    public interface IPostRepository
    {
        Task CreatePostAsync(Post post);
    }
}