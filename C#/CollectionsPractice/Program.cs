// Arrays
// int[] numArray = {1, 2, 3, 4, 5, 6, 7, 8, 9};
string[] nameArray = {"Tim", "Martin", "Nikki", "Sara"};
// bool[] boolArr = new bool[10];


// for (int i = 0; i < boolArr.Length; i+= 2)
// {
//     boolArr[i] = true;
// }

// foreach (bool value in boolArr)
// {
//     Console.WriteLine(value);
// }

// Lists
List<string> flavors = new List<string>() {
    "Vanilla",
    "Chocolate",
    "Rocky Road",
    "Cherry",
    "Banana"
};

// Console.WriteLine(flavors.Count);
// Console.WriteLine(flavors[2]);
// flavors.RemoveAt(2);
// Console.WriteLine(flavors.Count);

// Dictionaries
Random rand = new Random();

Dictionary<string, string> UserInfo = new Dictionary<string, string>();

foreach (string name in nameArray)
{
    UserInfo.Add(name, flavors[rand.Next(flavors.Count)]);
}

foreach (KeyValuePair<string, string> entry in UserInfo)
{
    Console.WriteLine(entry.Key + " - " + entry.Value);
}