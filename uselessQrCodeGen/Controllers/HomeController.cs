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

    }
}
