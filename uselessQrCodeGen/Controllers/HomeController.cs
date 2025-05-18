using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using uselessQrCodeGen.Models;
using uselessQrCodeGen.Services;

namespace uselessQrCodeGen.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddRanking([FromBody] RankingModel ranking)
        {
            if (ranking != null && !string.IsNullOrWhiteSpace(ranking.Name) && ranking.LostTime > 0)
            {
                RankingList.Instance.AddRanking(ranking);
                return Ok();
            }
            return BadRequest();
        }
    }
}
