// 1
// static void PrintNumbers()
// {
//     // Print all of the integers from 1 to 255.
//     int i = 1;
//     while (i <= 255) {
//         Console.WriteLine(i);
//         i++;
//     }
// }

// PrintNumbers();


// 2
// static void PrintOdds()
// {
//     // Print all of the odd integers from 1 to 255.
//     for (int i = 1; i <= 255; i += 2){
//         Console.WriteLine(i);
//     }
// }

// PrintOdds();


// 3
// static void PrintSum()
// {
//     // Print all of the numbers from 0 to 255, 
//     // but this time, also print the sum as you go. 
//     // For example, your output should be something like this:
    
//     // New number: 0 Sum: 0
//     // New number: 1 Sum: 1
//     // New number: 2 Sum: 3
//     int sum = 0;
//     for (int i = 0; i <= 255; i++){
//         sum = sum += i;
//         Console.WriteLine("New Number: " + i + " Sum: " + sum);
//     }
// }

// PrintSum();


// 4
// static void LoopArray(int[] numbers)
// {
//     // Write a function that would iterate through each item of the given integer array and 
//     // print each value to the console. 
//     foreach (int num in numbers){
//         Console.WriteLine(num);
//     }
// }

// int[] numArray = {1, 2, 3, 4, 5, 6, 7};

// LoopArray(numArray);


// 5
// static int FindMax(int[] numbers)
// {
//     // Write a function that takes an integer array and prints and returns the maximum value in the array. 
//     // Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), 
//     // or even a mix of positive numbers, negative numbers and zero.
//     int maxValue = numbers[0];
//     foreach (int num in numbers){
//         if (num > maxValue){
//             maxValue = num;
//         }
//     }
//     return maxValue;
// }

// int[] numberArr = {-1, -15, -32, -2};

// Console.WriteLine(FindMax(numberArr));


// 6
// static void GetAverage(int[] numbers)
// {
//     // Write a function that takes an integer array and prints the AVERAGE of the values in the array.
//     // For example, with an array [2, 10, 3], your program should write 5 to the console.
//     int sum = 0;

//     for (int i = 0; i < numbers.Length; i++)
//     {
//         sum += numbers[i];
//     }

//     int average = (int)sum / numbers.Length;

//     Console.WriteLine(average);
// }

// int[] numArr = {2, 10, 3, 85};

// GetAverage(numArr);

