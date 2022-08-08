using LinqEruption;

List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46,"Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");

// Execute Assignment Tasks here!
// 1
IEnumerable<Eruption> firstChile = eruptions.Where(e => e.Location == "Chile");
// Console.WriteLine(firstChile.First());

// 2
Eruption? firstHawaiian = eruptions.FirstOrDefault(e => e.Location == "Hawaiian Is");

// if (firstHawaiian != null)
// {
//     Console.WriteLine(firstHawaiian);
// }
// else
// {
//     Console.WriteLine("No Hawaiian Is Eruption Found");
// }

// 3
Eruption? after1900AndNewZealand = eruptions.FirstOrDefault(e => e.Year >= 1900 && e.Location == "New Zealand");
// Console.WriteLine(after1900AndNewZealand);

// 4
IEnumerable<Eruption> over2000M = eruptions.Where(e => e.ElevationInMeters > 2000);
// PrintEach(over2000M, "Volcanos Over 2000m");

// 5
IEnumerable<Eruption> ZVolcanoes = eruptions.Where(e => e.Volcano.StartsWith("Z"));
// int zCount = ZVolcanoes.Count();
// PrintEach(ZVolcanoes, $"There are/is {zCount} Volcano(s) That Start with Z");

// 6
int highestElevation = eruptions.Max(e => e.ElevationInMeters);
// Console.WriteLine(highestElevation);

// 7
IEnumerable<Eruption> highestVolcano = eruptions.Where(e => e.ElevationInMeters == highestElevation);
// PrintEach(highestVolcano, "The Highest Volcano:");

// 8
IEnumerable<Eruption> alphaVolcano = eruptions.OrderBy(e => e.Volcano);
// PrintEach(alphaVolcano, "Alphabetical Volcanoes");

// 9
IEnumerable<Eruption> before1000 = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano);
// PrintEach(before1000, "Eruptions before 1000CE Alphabetically");

// Helper method to print each item in a List or IEnumerable.This should remain at the bottom of your class!
static void PrintEach(IEnumerable<dynamic> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (var item in items)
    {
        Console.WriteLine(item.ToString());
    }
}
