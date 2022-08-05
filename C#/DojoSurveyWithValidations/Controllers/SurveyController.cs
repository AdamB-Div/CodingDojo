using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyWithValidations.Models;

namespace DojoSurveyWithValidations.Controllers;

public class SurveyController : Controller
{
    [HttpPost("/results")]
    public IActionResult DisplayResults(Survey newSurvey)
    {
        if(ModelState.IsValid)
        {
            return View("Results", newSurvey);
        }
        else
        {
            return View("Index");
        }
    }
}