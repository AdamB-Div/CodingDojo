class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
    
    def deposit(self, amount):
        print(f"Thank you for depositing: {amount}")
        self.balance += amount
        print(f"Your new balance is: {self.balance}")

    def withdraw(self, amount):
        pass

    def display_account_info(self):
        print("Your Interest Rate is: ", self.int_rate)
        print("Your Balance is: ", self.balance)

    def yield_interest(self):
        pass

adam = BankAccount(0.02, 1050)
adam.deposit(200)