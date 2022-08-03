using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View("Index");
    }


    [HttpPost]
    [Route("pushinfo")]
    public IActionResult PushInfo(string name, string location, string language, string comments)
    {
        string Name = name;
        string Location = location;
        string Language = language;
        string Comments = comments;

        return RedirectToAction("Result");
    }

    [HttpGet("result")]
    public ViewResult Result()
    {
        return View("Result");
    }
}