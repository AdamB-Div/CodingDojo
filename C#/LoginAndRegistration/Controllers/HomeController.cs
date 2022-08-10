using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LoginAndRegistration.Models;

namespace LoginAndRegistration.Controllers;

public class HomeController : Controller
{
    private int? uid
    {
        get
        {
            return HttpContext.Session.GetInt32("UserId");
        }
    }

    private bool loggedIn
    {
        get
        {
            return uid != null;
        }
    }

    private LoginAndRegistrationContext _context;

    public HomeController(LoginAndRegistrationContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        if (loggedIn)
        {
            return View("Index");
        }

        return RedirectToAction("Login", "User");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}