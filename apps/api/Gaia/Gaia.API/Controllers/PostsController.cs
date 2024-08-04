using Gaia.Application.DTOs.PostDTOs;
using Gaia.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Gaia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostService _postService;
        private readonly IImgurService _imgurService;
        private readonly IUpVoteService _upVoteService;

        public PostsController(IPostService postService, IImgurService imgurService, IUpVoteService upVoteService)
        {
            _postService = postService;
            _imgurService = imgurService;
            _upVoteService = upVoteService;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create([FromForm]PostRequest postRequest)
        {
            if (ModelState.IsValid)
            {
                var post = await _postService.CreatePostAsync(postRequest, User);
                return Ok(post);
            }
            return BadRequest();
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _postService.GetPostsAsync());
        }

        [Authorize]
        [HttpPost("{postId}/upVote")]
        public async Task<IActionResult> UpVotepost(Guid postId)
        {
            if (ModelState.IsValid)
            {
               var response = await _upVoteService.ToggleUpVoteAsync(postId, User);
                return Ok(response);
            }

            return BadRequest();
        }

    }
}