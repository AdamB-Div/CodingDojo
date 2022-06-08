from person import Person

class Student(Person):
    def __init__(self, first_name, last_name, age, instructor, current_stack):
        super().__init__(first_name, last_name, age)
        self.instructor = instructor
        self.current_stack = current_stack
    
    def print_info(self):
        super().print_info()
        print("Instructor: ", self.instructor)
        print("Current Stack: ", self.current_stack)

print("************ MENU OF OPTIONS ***************")
print("1) Add a New Student")
print("0) Exit")
option = 1

while option != 0:
    first_name = input("Please Type Your First Name: ")
    last_name = input("Please Type Your First Name: ")
    age = input("Please Type Your Age: ")
    instructor = input("Please Type Your Instructor Name: ")
    stack = input("Please Type Your Current Stack: ")

alex = Student("Alex", "Miller", 20, "Nichole", "Web Fundamentals")

alex.print_info()