// Random Array Required
// int[] RandomArray(){
//     Random rand = new Random();

//     int[] newArr = new int[10];

//     for (int i = 0; i < newArr.Length; i++)
//     {
//         int randNum = rand.Next(5, 26);
//         newArr[i] = randNum;
//     }

//     int minVal = newArr[0];
//     int maxVal = newArr[0];
//     int sum = 0;

//     for (int i = 0; i < newArr.Length; i++)
//     {
//         if (newArr[i] < minVal) {
//             minVal = newArr[i];
//         }
//         if (newArr[i] > maxVal) {
//             maxVal = newArr[i];
//         }
//         sum += newArr[i];
//     }

//     foreach (int num in newArr)
//     {
//         Console.WriteLine(num);
//     }

//     Console.WriteLine($"The min value is: {minVal}");
//     Console.WriteLine($"The max value is: {maxVal}");
//     Console.WriteLine($"The sum of all values is: {sum}");

//     return newArr;
// }

// RandomArray();


// Coin Flip Required
// string TossCoin()
// {
//     Console.WriteLine("Tossing A Coin!");

//     Random rand = new Random();

//     int randNum = rand.Next(1, 3);
//     if (randNum == 1){
//         return "You flipped Heads!";
//     }else {
//         return "You flipped Tails!";
//     }
// }

// Console.WriteLine(TossCoin());


// Coin Flip Optional
// double TossMultipleCoins(int num)
// {
//     int headCount = 0;

//     Random rand = new Random();

//     for (int i = 0; i < num; i++)
//     {
//         int flip = rand.Next(1,3);

//         if (flip == 1){
//             headCount++;
//         }
//     }
//     double ratio = (double)headCount / (double)num;

//     Console.WriteLine($"You threw heads {headCount} times");
//     Console.WriteLine($"Your ratio of heads to total ({num}) throws was {ratio}");

//     return ratio;
// }

// TossMultipleCoins(5);


// Names Required
List<string> Names()
{
    List<string> names = new List<string>() {
        "Todd",
        "Tiffany",
        "Charlie",
        "Geneva",
        "Sydney",
        "Adam",
        "Juan"
    };

    List<string> newList = new List<string>();

    foreach (string name in names)
    {
        if (name.Length <= 5){
            newList.Add(name);
        }
    }

    foreach (string name in newList)
    {
        Console.WriteLine(name);
    }

    return names;
}

Names();