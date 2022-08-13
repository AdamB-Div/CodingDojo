using Microsoft.EntityFrameworkCore;
using ChefsNDishes.Models;

// Creates builder (also part of boilerplate code for web apps)
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddHttpContextAccessor();
builder.Services.AddSession();

//  Creates the db connection string
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Adds database connection - must be before app.Build();
builder.Services.AddDbContext<ChefsNDishesContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Chef/Error");
}
app.UseStaticFiles();

app.UseSession();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Chef}/{action=Chefs}/{id?}");

app.Run();