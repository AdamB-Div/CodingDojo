using DojoSurvey.Models;
using Microsoft.AspNetCore.Mvc;

public class SurveyController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View("Index");
    }


    [HttpPost("/results")]
    public IActionResult DisplayResults(Survey newSurvey)
    {
        return View("Results", newSurvey);
    }
}