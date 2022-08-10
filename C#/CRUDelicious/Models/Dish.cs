#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUDelicious.Models;

public class Dish
{
    [Key]
    public int DishId { get; set; }

    [Required]
    [MinLength(2, ErrorMessage = "Must be at least 2 characters")]
    [MaxLength(45, ErrorMessage = "Must be less than 45 characters")]
    [Display(Name = "Name of Dish")]
    public string Name { get; set; }

    [Required]
    [MinLength(2, ErrorMessage = "Must be at least 2 characters")]
    [MaxLength(45, ErrorMessage = "Must be less than 45 characters")]
    [Display(Name = "Chef's Name")]
    public string Chef { get; set; }

    [Required]
    [Range(1, 5, ErrorMessage = "Rate 1-5")]
    public int Tastiness { get; set; }

    [Required]
    [Range(0, Int32.MaxValue, ErrorMessage = "Calories have to be positive")]
    [Display(Name = "# of Calories")]
    public int Calories { get; set; }

    [Required]
    [MinLength(10, ErrorMessage = "Must be at least 10 characters")]
    public string Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}