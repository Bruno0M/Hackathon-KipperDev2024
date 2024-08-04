using Microsoft.AspNetCore.Http;

namespace Gaia.Application.Interfaces
{
    public interface IImgurService
    {
        Task<string> UploadImageAsync(IFormFile imageFile);

    }
}
