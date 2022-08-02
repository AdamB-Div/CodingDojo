namespace Humans;
public class Wizard : Human {

    public Wizard(string name) : base (name){
        Health = 50;
        Intelligence = 25;
    }

    public override int Attack(Human target){
        int damage = Intelligence * 5;
        target.Health -= damage;
        Health += damage;
        Console.WriteLine($"Target was hit! Current Health: {target.Health}");
        return target.Health;
    }

    public int Heal(Human target){
        target.Health += 10 * Intelligence;
        Console.WriteLine($"Target was healed! Current Health: {target.Health}");
        return target.Health;
    }
}