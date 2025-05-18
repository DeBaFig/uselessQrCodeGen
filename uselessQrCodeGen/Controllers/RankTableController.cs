using Microsoft.AspNetCore.Mvc;
using uselessQrCodeGen.Services;
namespace uselessQrCodeGen.Controllers
{
    public class RankTableController : Controller
    {
        public IActionResult Index()
        {
            RankingList rankingList = RankingList.Instance;
            List<Models.RankViewModel> view = rankingList.GetRankingList();

            return View(view);
        }
    }
}
