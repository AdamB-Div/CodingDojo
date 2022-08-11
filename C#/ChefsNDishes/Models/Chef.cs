#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
using static ChefsNDishes.Models.CustomValidations;

namespace ChefsNDishes.Models;

public class Chef
{
    [Key]
    public int ChefId { get; set; }

    [Required(ErrorMessage = "is required")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "is required")]
    public string LastName { get; set; }

    [Required(ErrorMessage = "is required")]
    [AgeCheck]
    [Eighteen]
    [DataType(DataType.Date)]
    public DateTime DateOfBirth { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}