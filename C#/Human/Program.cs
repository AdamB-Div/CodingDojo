using Humans;

Human alex = new Human("Alex Miller");
Human martha = new Human("Martha Smith", 20, 20, 20, 500);

Console.WriteLine(alex.Name);
Console.WriteLine(martha.AllAttributes());

alex.Attack(martha);