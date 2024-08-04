using Microsoft.AspNetCore.Identity;

namespace Gaia.Application.Interfaces
{
    public interface ITokenService
    {
        public string GenerateToken(IdentityUser<Guid> user);
    }
}
