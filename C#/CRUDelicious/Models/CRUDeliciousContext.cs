#pragma warning disable CS8618

using Microsoft.EntityFrameworkCore;
namespace CRUDelicious.Models;
// the MyContext class representing a session with our MySQL database, allowing us to query for or save data
public class CRUDeliciousContext : DbContext 
{ 
    public CRUDeliciousContext(DbContextOptions options) : base(options) { }
    // the "Dishes" table name will come from the DbSet property name
    public DbSet<Dish> Dishes { get; set; } 
}
