using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefsNDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace ChefsNDishes.Controllers;

public class ChefController : Controller
{
    private ChefsNDishesContext _context;

    public ChefController(ChefsNDishesContext context)
    {
        _context = context;
    }


    // All Chefs Page
    [HttpGet("")]
    public IActionResult Chefs()
    {
        List<Chef> AllChefs = _context.Chefs
            .Include(chef => chef.CreatedDishes)
            .ToList();

        return View("Chefs", AllChefs);
    }

// ===============================================

    // Add Chef Page
    [HttpGet("new")]
    public IActionResult AddChef()
    {
        return View("AddChef");
    }

    // Create Chef in DB
    [HttpPost("chef/create")]
    public IActionResult CreateChef(Chef newChef)
    {
        if (ModelState.IsValid == false)
        {
            return AddChef();
        }
        else
        {
            _context.Chefs.Add(newChef);
            _context.SaveChanges();

            return RedirectToAction("Chefs");
        }
    }

    // ==============================================



    // ==============================================

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}