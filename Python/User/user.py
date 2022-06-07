class User:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def print_user_info(self):
        print("Username - ", self.name)
        print("Balance - ", self.balance)
        print("-----------")

    def make_withdrawl(self, amount):
        print(f"Your prior balance is: {self.balance}")
        self.balance -= amount
        print(f"Withdrawing {amount} \nYour new balance is: {self.balance}")

    def make_deposit(self, amount):
        print(f"Your prior balance is: {self.balance}")
        self.balance += amount
        print(f"Depositing {amount} \nYour new balance is: {self.balance}")

    def transfer_money(self, amount, receiver):
        print(f"Transfering {amount} from {self.name} to {receiver.name}")
        self.balance -= amount
        receiver.balance += amount
        print(f"{self.name} has transfered {amount} to {receiver.name}")
        print(f"{self.name}'s new balance is {self.balance} - {receiver.name}'s new balance is {receiver.balance}")

winter = User("Winter", 1000)
george = User("George", 1000)
alexander = User("Alexander", 1000)
alexander.print_user_info()

alexander.make_withdrawl(200)
alexander.print_user_info()

george.make_deposit(200)
george.make_deposit(50)
george.make_withdrawl(100)
george.make_withdrawl(200)
george.print_user_info()


george.print_user_info()
alexander.print_user_info()
george.transfer_money(50, alexander)