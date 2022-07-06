class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("Here is your information:")
        print(f"First Name - {self.first_name}")
        print(f"Last Name - {self.last_name}")
        print(f"Email - {self.email}")
        print(f"Age - {self.age}")
        print(f"Are you a Rewards Member? - {self.is_rewards_member}")
        print(f"Gold Card Points - {self.gold_card_points}")

    def enroll(self):
        if self.is_rewards_member == False:
            self.is_rewards_member = True
            self.gold_card_points += 200
            print("Congrats on the Upgrade!")
            print(f"Your Membership status is - {self.is_rewards_member} \nYour new balance of points is - {self.gold_card_points}")
        else:
            print(f"User already a Member")
            return False

    def spend_points(self, amount):
        if self.gold_card_points < amount:
            print(f"Sorry your balance of {self.gold_card_points} does not cover your purchase")
        else:
            print(f"Thank you for spending {amount} Gold Card Points")
            self.gold_card_points -= amount
            print(f"Your new balance is {self.gold_card_points}")

adam = User("Adam", "Bat", "test@gmail.com", 26)
lauren = User("Lauren", "Mas", "test@aol.com", 30)

adam.enroll()
adam.spend_points(300)
adam.display_info()

# They all work I just don't like all of the commented out test