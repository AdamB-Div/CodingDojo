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

int[] numArr = {2, 10, 3, 85, -2, -4};

// GetAverage(numArr);


// 7
// static int[] OddArray()
// {
//     // Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255. 
//     // When the program is done, this array should have the values of [1, 3, 5, 7, ... 255].
//     int[] result = new int[255];
//     int idxCount = 0;
//     for (int i = 1; i < result.Length; i++) {
//         if (i % 2 == 1){
//             result[idxCount] = i;
//             idxCount++;
//         }
//     }
//     return result;
// }

// int[] array = OddArray();
// foreach (int num in array){
//     Console.WriteLine(num);
// }


// 8
// static int GreaterThanY(int[] numbers, int y)
// {
//     // Write a function that takes an integer array, and a integer "y" and returns the number of array values 
//     // That are greater than the "y" value. 
//     // For example, if array = [1, 3, 5, 7] and y = 3. Your function should return 2 
//     // (since there are two values in the array that are greater than 3).
//     int Count = 0;
//     for (int i = 0; i < numbers.Length; i++)
//     {
//         if (numbers[i] > y)
//         {
//             Count++;
//         }
//     }
//     return Count;
// }

// Console.WriteLine(GreaterThanY(numArr, 3));


// 9
// static void SquareArrayValues(int[] numbers)
// {
//     // Write a function that takes an integer array "numbers", and then multiplies each value by itself.
//     // For example, [1,5,10,-10] should become [1,25,100,100]
//     for (int i = 0; i < numbers.Length; i++)
//     {
//         numbers[i] = (int)numbers[i] * (int)numbers[i];
//     }
//     foreach (int num in numbers)
//     {
//         Console.WriteLine(num);
//     }
// }

// SquareArrayValues(numArr);


// 10
// static void EliminateNegatives(int[] numbers)
// {
//     // Given an integer array "numbers", say [1, 5, 10, -2], create a function that replaces any negative number with the value of 0. 
//     // When the program is done, "numbers" should have no negative values, say [1, 5, 10, 0].
//     for (int i = 0; i < numbers.Length; i++)
//     {
//             if (numbers[i] < 0)
//             {
//                 numbers[i] = 0;
//             }
//     }
//     foreach (int num in numbers)
//     {
//         Console.WriteLine(num);
//     }
// }

// EliminateNegatives(numArr);


// 11
// static void MinMaxAverage(int[] numbers)
// {
//     // Given an integer array, say [1, 5, 10, -2], create a function that prints the maximum number in the array, 
//     // the minimum value in the array, and the average of the values in the array.
//     int max = numbers[0];
//     int min = numbers[0];
//     int sum = 0;

//     for (int i = 0; i < numbers.Length; i++)
//     {
//         if (numbers[i] > max)
//         {
//             max = numbers[i];
//         }
//         if (numbers[i] < min)
//         {
//             min = numbers[i];
//         }
//         sum = sum += numbers[i];
//     }
//     int average = (int)sum / numbers.Length;
//     Console.WriteLine("The Max Value is " + max);
//     Console.WriteLine("The Min Value is " + min);
//     Console.WriteLine("The Average Value is " + average);
// }

// MinMaxAverage(numArr);


// 12
// static void ShiftValues(int[] numbers)
// {
//     // Given an integer array, say [1, 5, 10, 7, -2], 
//     // Write a function that shifts each number by one to the front and adds '0' to the end. 
//     // For example, when the program is done, if the array [1, 5, 10, 7, -2] is passed to the function, 
//     // it should become [5, 10, 7, -2, 0].
//     List<int> temp = numbers.ToList();
//     temp.RemoveAt(0);
//     temp.Add(0);

//     numbers = temp.ToArray();
    
//     foreach (int num in numbers)
//     {
//         Console.WriteLine(num);
//     }
// }

// ShiftValues(numArr);


// 13
// static object[] NumToString(int[] numbers)
// {
//     object[] objArray = numbers.Cast<object>().ToArray();

//     string dojo = "Dojo";
//     foreach (object obj in objArray)
//     {
//         if ((int)obj < 0) {
//             objArray[(int)obj] = (string)dojo;
//         }
//     }

//     foreach (object obj in objArray)
//     {
//         Console.WriteLine(obj);
//     }

//     return objArray;
// }
static object[] NumToString(int[] numbers){
    object[] newArr = new object[numbers.Length];

    for (int i = 0; i < numbers.Length; i++)
    {
        if (numbers[i] < 0){
            newArr[i] = "Dojo";
        } else {
            newArr[i] = numbers[i];
        }
    }

    foreach (object obj in newArr)
    {
        Console.WriteLine(obj);
    }
    return newArr;
}

NumToString(numArr);