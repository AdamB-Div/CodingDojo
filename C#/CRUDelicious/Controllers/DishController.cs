using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers;

public class DishController : Controller
{
    private CRUDeliciousContext _context;

    public DishController(CRUDeliciousContext context)
    {
        _context = context;
    }
    
    // Home Page
    [HttpGet("")]
    public IActionResult Index()
    {
        List<Dish> AllDishes = _context.Dishes.OrderBy(d => d.UpdatedAt).Reverse().ToList();

        return View("Index", AllDishes);
    }


    // Add A Dish Page
    [HttpGet("dishes/new")]
    public IActionResult New()
    {
        return View("New");
    }

    // Confirm New Dish
    [HttpPost("dishes/create")]
    public IActionResult Create(Dish newDish)
    {
        if (ModelState.IsValid == false)
        {
            return New();
        }

        _context.Dishes.Add(newDish);
        _context.SaveChanges();

        return RedirectToAction("Index");
    }


    // Get One Dish
    [HttpGet("dish/{dishId}")]
    public IActionResult ViewDish(int dishId)
    {
        Dish? dish = _context.Dishes.FirstOrDefault(dish => dish.DishId == dishId);

        if (dish == null)
        {
            return RedirectToAction("Index");
        }

        return View("ViewDish", dish);
    }


    // Delete Dish
    [HttpPost("dish/{dishId}/delete")]
    public IActionResult DeleteDish(int dishId)
    {
        Dish? dish = _context.Dishes.FirstOrDefault(dish => dish.DishId == dishId);

        if (dish != null)
        {
            _context.Dishes.Remove(dish);
            _context.SaveChanges();
        }

        return RedirectToAction("Index");
    }


    // Edit Dish
    [HttpGet("dish/{dishId}/edit")]
    public IActionResult EditDish(int dishId)
    {
        Dish? dish = _context.Dishes.FirstOrDefault(dish => dish.DishId == dishId);

        if (dish == null)
        {
            return RedirectToAction("Index");
        }

        return View("Edit", dish);
    }

    // Update Dish
    [HttpPost("dish/{dishId}/update")]
    public IActionResult UpdateDish(int dishId, Dish updatedDish)
    {
        if (ModelState.IsValid == false)
        {
            return EditDish(dishId);
        }

        Dish? dish = _context.Dishes.FirstOrDefault(dish => dish.DishId == dishId);

        if (dish == null)
        {
            return RedirectToAction("Index");
        }

        dish.Name = updatedDish.Name;
        dish.Chef = updatedDish.Chef;
        dish.Calories = updatedDish.Calories;
        dish.Tastiness = updatedDish.Tastiness;
        dish.Description = updatedDish.Description;
        dish.UpdatedAt = DateTime.Now;

        _context.Dishes.Update(dish);
        _context.SaveChanges();

        return RedirectToAction("ViewDish", new { dishId = dish.DishId});
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
