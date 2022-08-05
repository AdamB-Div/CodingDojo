#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace DojoSurveyWithValidations.Models;

public class Survey
{
    [Required]
    [MinLength(2)]
    [Display(Name = "Your Name")]
    public string Name { get; set; }

    [Required]
    [Display(Name = "Dojo Location")]
    public string Location { get; set; }

    [Required]
    [Display(Name = "Favorite Language")]
    public string Language { get; set; }

    [MinLength(20, ErrorMessage = "If commenting, you need at least 20 characters")]
    [Display(Name = "Comment(optional):")]
    public string? Comment { get; set; }
}