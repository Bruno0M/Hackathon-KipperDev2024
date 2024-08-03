using Microsoft.AspNetCore.Identity;

namespace Gaia.Domain.Entities
{
    public class ApplicationUser : IdentityUser<Guid>
    {
        public string? ProfileUrl { get; set; }
        public List<Post> Posts { get; set; }
    }
}