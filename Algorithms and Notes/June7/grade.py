class Grade:
    def __init__(self, topic, mark, student_name) -> None:
        self.topic = topic
        self.mark = mark
        self.student_name = student_name

    def print_info(self):
        print("Topic - ", self.topic)
        print("Grade - ", self.mark)

    def extra_points(self, percentage):
        current_grade = self.mark
        final_grade = current_grade * (percentage / 100) + current_grade
        self.mark = final_grade

alex_grade = Grade("Web Fundamentals", 82.0, "Alex")
alex_grade.print_info()
alex_grade.extra_points(2)
alex_grade.print_info()