using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefsNDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace ChefsNDishes.Controllers;

public class DishController : Controller
{
    private ChefsNDishesContext _context;

    public DishController(ChefsNDishesContext context)
    {
        _context = context;
    }

    // Get All Dishes
    [HttpGet("dishes")]
    public IActionResult Dishes()
    {
        List<Dish> AllDishes = _context.Dishes
            .Include(dish => dish.Creator)
            .ToList();

        return View("Dishes", AllDishes);
    }

    // ========================================

    // New Dish Page
    [HttpGet("dishes/new")]
    public IActionResult AddDish()
    {
        ViewBag.chefList = _context.Chefs.ToList();

        return View("AddDish");
    }

    // Create Dish Route
    [HttpPost("dishes")]
    public IActionResult CreateDish(Dish newDish)
    {
        if (ModelState.IsValid == false)
        {
            return AddDish();
        }
        else
        {
            _context.Dishes.Add(newDish);
            _context.SaveChanges();
        }

        return RedirectToAction("Dishes");
    }
}