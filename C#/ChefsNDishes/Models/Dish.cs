#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace ChefsNDishes.Models;

public class Dish
{
    [Key]
    public int DishId { get; set; }

    [Required(ErrorMessage = "is required")]
    [Display(Name = "Name of Dish")]
    public string DishName { get; set; }

    [Required(ErrorMessage = "is required")]
    [Range(0, Int32.MaxValue, ErrorMessage = "cannot be negative")]
    [Display(Name = "# of Calories")]
    public int Calories { get; set; }

    [Required(ErrorMessage = "is required")]
    [Range(0, 5, ErrorMessage = " must be 1-5")]
    public int Tastiness { get; set; }

    [Required(ErrorMessage = "is required")]
    public string Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public int ChefId { get; set; }
}