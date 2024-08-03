using Gaia.Application.DTOs.PostDTOs;
using Gaia.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Gaia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostService _postService;

        public PostsController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(PostRequest postRequest)
        {
            if (ModelState.IsValid)
            {
                var post = _postService.CreatePostAsync(postRequest);
                return Ok(post);
            }

            return BadRequest();
        }
    }
}
