using Gaia.Application.DTOs;
using Gaia.Application.DTOs.UserDTOs;

namespace Gaia.Application.Interfaces
{
    public interface IAuthService
    {
        Task<ServiceResponse<LoginResponse>> Login(LoginRequest loginRequest);
        Task<ServiceResponse<string>> Register(UserRequest userRequest);
    }
}
