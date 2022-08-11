using System.ComponentModel.DataAnnotations;

namespace ChefsNDishes.Models;

public class CustomValidations
{
    public class AgeCheckAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return ValidationResult.Success;
            }

            DateTime date = (DateTime)value;

            if (date >= DateTime.Now)
            {
                return new ValidationResult("must be in the past");
            }
            return ValidationResult.Success;
        }
    }

    public class EighteenAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return ValidationResult.Success;
            }

            DateTime date = (DateTime)value;
            DateTime years = DateTime.Now.AddYears(-18);

            if (date > years)
            {
                return new ValidationResult("must be at least 18");
            }
            return ValidationResult.Success;
        }
    }
}