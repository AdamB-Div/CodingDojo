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
    public string Name { get; set; }

    [Required]
    [MinLength(2, ErrorMessage = "Must be at least 2 characters")]
    [MaxLength(45, ErrorMessage = "Must be less than 45 characters")]
    public string Chef { get; set; }

    [Required]
    [Range(1, 10, ErrorMessage = "Rate 1-10")]
    public int Tastiness { get; set; }

    [Required]
    public int Calories { get; set; }

    [Required]
    [MinLength(10, ErrorMessage = "Must be at least 10 characters")]
    public string Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}