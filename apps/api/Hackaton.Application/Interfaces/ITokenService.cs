using Microsoft.AspNetCore.Identity;

namespace Hackaton.Application.Interfaces
{
    public interface ITokenService
    {
        public string GenerateToken(IdentityUser<Guid> user);
    }
}
