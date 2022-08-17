using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WeddingPlanner.Models;
using Microsoft.AspNetCore.Identity;

namespace WeddingPlanner.Controllers;

public class WeddingController : Controller
{
    private int? uid
    {
        get
        {
            return HttpContext.Session.GetInt32("UUID");
        }
    }

    private bool loggedIn
    {
        get
        {
            return uid != null;
        }
    }

    private WeddingPlannerContext _context;
    
    public WeddingController(WeddingPlannerContext context)
    {
        _context = context;
    }

    [HttpGet("Dashboard")]
    public IActionResult Dashboard()
    {
        if (loggedIn)
        {
            return View("Dashboard");
        }

        return RedirectToAction("Index", "User");
    }
}