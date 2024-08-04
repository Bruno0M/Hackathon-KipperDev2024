using Gaia.Application.DTOs;
using Gaia.Application.DTOs.UserDTOs;
using Gaia.Application.Interfaces;
using Gaia.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using System.Net;

namespace DiscordAspnet.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IImgurService _imgurService;

        public AuthService(UserManager<ApplicationUser> userManager, ITokenService tokenService, IImgurService imgurService)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _imgurService = imgurService;
        }

        public async Task<ServiceResponse<string>> Register(UserRequest userRequest)
        {
            ServiceResponse<string> response = new();


            var postUrl = await _imgurService.UploadImageAsync(userRequest.ProfileUrl);

            var user = new ApplicationUser()
            {
                Email = userRequest.Email,
                UserName = userRequest.Username,
                ProfileUrl = postUrl
            };

            var result = await _userManager.CreateAsync(user, userRequest.Password);

            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description).ToList();

                response.Message = string.Join(" ", errors);
                response.Status = HttpStatusCode.BadRequest;
                return response;
            }

            response.Message = "User successfully created";
            response.Status = HttpStatusCode.OK;

            return response;
        }

        public async Task<ServiceResponse<LoginResponse>> Login(LoginRequest loginRequest)
        {
            ServiceResponse<LoginResponse> response = new();

            if (string.IsNullOrEmpty(loginRequest.Email) || string.IsNullOrEmpty(loginRequest.Password))
            {
                response.Data = null;
                response.Message = "Invalid Credentials";
                response.Status = HttpStatusCode.BadRequest;
                return response;
            }

            var userExists = await _userManager.FindByEmailAsync(loginRequest.Email);

            if (userExists == null)
            {
                userExists = await _userManager.FindByNameAsync(loginRequest.Email);
            }

            if (userExists == null || !await _userManager.CheckPasswordAsync(userExists, loginRequest.Password))
            {
                response.Data = null;
                response.Message = "Invalid Credentials";
                response.Status = HttpStatusCode.Unauthorized;
            }

            var token = _tokenService.GenerateToken(userExists);

            var loginResponse = new LoginResponse(
                userExists.Id,
                userExists.UserName,
                token);

            response.Data = loginResponse;
            response.Message = "Successfully logged in";
            response.Status = HttpStatusCode.OK;

            return response;
        }

    }
}
