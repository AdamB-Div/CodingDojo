class Student:
    bootcamp = "Coding Dojo"
    list_students = []
    # Constructor - Constructing Objects
    def __init__(self, first_name, last_name, instructor, current_stack):
        # Attributes - Accessible in the entire class
        self.first_name = first_name
        self.last_name = last_name
        self.instructor = instructor
        self.current_stack = current_stack
        Student.list_students.append(self)

    # Methods
    def print_student_info(self):
        print("First Name - ", self.first_name)
        print("Last Name - ", self.last_name)
        print("Instructor - ", self.instructor)
        print("Current Stack - ", self.current_stack)

    def full_name(self):
        return self.first_name + " " + self.last_name

    @classmethod
    def print_all_students(cls):
        for student in cls.list_students:
            print(student.full_name(), student.current_stack)
    
    @classmethod
    def change_stack_name(cls, new_stack):
        for student in cls.list_students:
            student.current_stack = new_stack

alexander = Student("Alexander", "Miller", "Alfredo", "Python/Flask")
martha = Student("Martha", "Smith", "Amanda", "Web Fundamentals")
Roger = Student("Roger", "Smith", "Tyler", "Python")
Anna = Student("Anna", "Smith", "Nichole", "Web Fundamentals")


# Student.print_all_students()

# Student.change_stack_name("MERN")
# Student.print_all_students()



# alexander.print_student_info()
# print("Who is Alexander's instructor? - ", alexander.instructor)

martha.print_student_info()
alexander.print_student_info()


# name = alexander.full_name()
# print(name)

