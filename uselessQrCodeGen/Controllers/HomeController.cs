using Microsoft.AspNetCore.Mvc;
using uselessQrCodeGen.Models;
using uselessQrCodeGen.Services;

namespace uselessQrCodeGen.Controllers
{
    public class HomeController : Controller
    {
        private readonly IConfiguration _configuration;

        public HomeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<List<string>> GetUselessWebsites()
        {
            try
            {
                var service = new UselessWebsitesService(_configuration);
                return await service.GetUselessWebsitesJsonAsync();
            }
            catch (Exception ex)
            {
                // Log o erro se desejar
                return new List<string>();
            }
        }
    }
}
