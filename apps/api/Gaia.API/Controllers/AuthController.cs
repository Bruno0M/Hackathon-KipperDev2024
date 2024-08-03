﻿using Gaia.Application.DTOs.UserDTOs;
using Gaia.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Gaia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginRequest loginRequest)
        {
            if (ModelState.IsValid)
            {
                var response = await _authService.Login(loginRequest);
                return Ok(response);
            }

            return BadRequest();
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserRequest userRequest)
        {
            if (ModelState.IsValid)
            {
                var response = await _authService.Register(userRequest);
                return Ok(response);
            }

            return BadRequest();
        }
    }
}
