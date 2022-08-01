// 3 Loops, make each function call empty in order to see it work

void numberLoop(int range = 255) {
    for (int i = 1; i <= range; i++) {
        Console.WriteLine(i);
    }
}

numberLoop(0);

void FizzBuzz(int range = 100) {
    for (int i = 1; i < range; i++) {
        bool divisibleByThree = i % 3 == 0;
        bool divisibleByFive = i % 5 == 0;

        if (divisibleByFive && divisibleByThree) {
            Console.WriteLine("FizzBuzz");
        }
        else if (divisibleByFive){
            Console.WriteLine("Buzz");
        }
        else if (divisibleByThree){
            Console.WriteLine("Fizz");
        }
        else {
            Console.WriteLine(i);
        }
    }
}

FizzBuzz(0);

void FizzBuzzWhile(int range = 100) {
    int i = 1;
    while (i < 100) {
        bool divisibleByThree = i % 3 == 0;
        bool divisibleByFive = i % 5 == 0;

        if (divisibleByFive && divisibleByThree) {
            Console.WriteLine("FizzBuzz");
        }
        else if (divisibleByFive){
            Console.WriteLine("Buzz");
        }
        else if (divisibleByThree){
            Console.WriteLine("Fizz");
        }
        else {
            Console.WriteLine(i);
        }
        i++;
    }
}

FizzBuzzWhile(0);