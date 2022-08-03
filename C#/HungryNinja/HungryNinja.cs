namespace hungryNinja;

public class Food
{
    public string Name { get; set; }
    public int Calories { get; set; }
    public bool IsSpicy { get; set; }
    public bool IsSweet { get; set; }

    public Food(string name, int calories, bool isSpicy, bool isSweet){
        Name = name;
        Calories = calories;
        IsSpicy = isSpicy;
        IsSweet = isSweet;
    }
}

class Buffet
{
    public List<Food> Menu;
    
    //constructor
    public Buffet()
    {
        Menu = new List<Food>()
        {
            new Food("Carrot", 15, false, false),
            new Food("Chocolate", 250, false, true),
            new Food("Taco", 600, true, false),
            new Food("PopTart", 300, false, true),
            new Food("IceCream", 120, false, true),
            new Food("RedHot Gum", 1, true, true),
            new Food("Artisan Water", 0, false, false),
        };
    }
    
    public object Food Serve()
    {
        Random rand = new Random();

        int randFood = rand.Next(1,8);
        return Menu(randFood);
    }
}

// class Ninja
// {
//     private int calorieIntake;
//     public List<Food> FoodHistory;
    
//     // add a constructor
    
//     // add a public "getter" property called "IsFull"
    
//     // build out the Eat method
//     public void Eat(Food item)
//     {
//     }
// }

