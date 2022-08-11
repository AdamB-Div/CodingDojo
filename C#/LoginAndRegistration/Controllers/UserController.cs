using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LoginAndRegistration.Models;
using Microsoft.AspNetCore.Identity;

namespace LoginAndRegistration.Controllers;

public class UserController : Controller
{
    private int? uid
    {
        get
        {
            return HttpContext.Session.GetInt32("UserId");
        }
    }

    private bool loggedIn
    {
        get
        {
            return uid != null;
        }
    }
    
    private LoginAndRegistrationContext _context;

    public UserController(LoginAndRegistrationContext context)
    {
        _context = context;
    }

    [HttpGet("register")]
    public IActionResult Register()
    {
        return View("Register");
    }

    [HttpPost("register/user")]
    public IActionResult RegisterUser(User newUser)
    {
        if (ModelState.IsValid)
        {
            if (_context.Users.Any(user => user.Email == newUser.Email))
            {
                ModelState.AddModelError("Email", "is already registered");
            }
        }

        if (ModelState.IsValid == false)
        {
            return Register();
        }

        PasswordHasher<User> hashPoint = new PasswordHasher<User>();
        newUser.Password = hashPoint.HashPassword(newUser, newUser.Password);

        _context.Users.Add(newUser);
        _context.SaveChanges();

        HttpContext.Session.SetInt32("UserId", newUser.UserId);
        HttpContext.Session.SetString("UserFirstName", newUser.FirstName);
        
        return RedirectToAction("Index", "Home");
    }

    [HttpGet("login")]
    public IActionResult Login()
    {
        return View("Login");
    }

    [HttpPost("login/user")]
    public IActionResult LoginUser(LoginUser loginUser)
    {
        if (ModelState.IsValid == false)
        {
            return Login();
        }

        User? dbUser = _context.Users.FirstOrDefault(user => user.Email == loginUser.LoginEmail);

        if (dbUser == null)
        {
            ModelState.AddModelError("LoginEmail", "Invalid Email or Password");
            return Login();
        }

        PasswordHasher<LoginUser> hashPoint = new PasswordHasher<LoginUser>();
        PasswordVerificationResult pwResult = hashPoint.VerifyHashedPassword(loginUser, dbUser.Password, loginUser.LoginPassword);

        if (pwResult == 0)
        {
            ModelState.AddModelError("LoginEmail", "Invalid Email or Password");
            return Login();
        }

        HttpContext.Session.SetInt32("UserId", dbUser.UserId);
        HttpContext.Session.SetString("UserFirstName", dbUser.FirstName);

        return RedirectToAction("Index", "Home");
    }


    [HttpPost("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index", "Home");
    }
}