class Student:
    # Constructor - Constructing Objects
    def __init__(self, first_name, last_name, instructor, current_stack):
        # Attributes - Accessible in the entire class
        self.first_name = first_name
        self.last_name = last_name
        self.instructor = instructor
        self.current_stack = current_stack

    # Methods
    def print_student_info(self):
        print("First Name - ", self.first_name)
        print("Last Name - ", self.last_name)
        print("Instructor - ", self.instructor)
        print("Current Stack - ", self.current_stack)

    def full_name(self):
        return self.first_name + " " + self.last_name

alexander = Student("Alexander", "Miller", "Alfredo", "Python/Flask")
alexander.print_student_info()
print("Who is Alexander's instructor? - ", alexander.instructor)

martha = Student("Martha", "Smith", "Amanda", "Web Fundamentals")
martha.print_student_info()

name = alexander.full_name()
print(name)