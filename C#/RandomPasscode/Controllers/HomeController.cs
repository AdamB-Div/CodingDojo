﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using RandomPasscode.Models;

namespace RandomPasscode.Controllers;

public class HomeController : Controller
{
    [HttpGet("")]
    public IActionResult Index()
    {
        Password newPassword = new Password();

        HttpContext.Session.SetString("password", newPassword.PasswordString());

        int? count = HttpContext.Session.GetInt32("count");

        if (count == null)
        {
            HttpContext.Session.SetInt32("count", 0);
        }
        else
        {
            int counter = (int)HttpContext.Session.GetInt32("count");
            HttpContext.Session.SetInt32("count", counter + 1);
        }


        return View("Index");
    }


    [HttpGet("/logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();

        return RedirectToAction("Index");
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
