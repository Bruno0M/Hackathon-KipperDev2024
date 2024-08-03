using Hackaton.Application.DTOs;
using Hackaton.Application.DTOs.UserDTOs;

namespace Hackaton.Application.Interfaces
{
    public interface IAuthService
    {
        Task<ServiceResponse<LoginResponse>> Login(LoginRequest loginRequest);
        Task<ServiceResponse<string>> Register(UserRequest userRequest);
    }
}
