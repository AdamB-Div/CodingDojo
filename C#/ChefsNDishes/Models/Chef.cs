#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
using static ChefsNDishes.Models.CustomValidations;

namespace ChefsNDishes.Models;

public class Chef
{
    [Key]
    public int ChefId { get; set; }

    [Required(ErrorMessage = "is required")]
    [Display(Name = "First Name")]
    public string FirstName { get; set; }

    [Required(ErrorMessage = "is required")]
    [Display(Name = "Last Name")]
    public string LastName { get; set; }

    [Required(ErrorMessage = "is required")]
    [AgeCheck]
    [Eighteen]
    [DataType(DataType.Date, ErrorMessage = "is not valid")]
    [Display(Name = "Date of Birth")]
    public DateTime? DateOfBirth { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public List<Dish> CreatedDishes { get; set; } = new List<Dish>();



    public string FullName()
    {
        return FirstName + " " + LastName;
    }

    public int Age()
    {
        DateTime today = DateTime.Now;
        DateTime dob = (DateTime)DateOfBirth;

        int a = (today.Year * 100 + today.Month) * 100 + today.Day;
        int b = (dob.Year * 100 + dob.Month) * 100 + dob.Day;

        return (a - b) / 10000;
    }
}