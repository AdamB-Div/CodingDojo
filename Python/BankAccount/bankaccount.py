class BankAccount:
    all_accounts = []

    def __init__(self, name, balance, int_rate = 1.02):
        self.int_rate = int_rate
        self.balance = balance
        self.name = name
        BankAccount.all_accounts.append(self)
    
    def deposit(self, amount):
        print(f"Thank you for depositing: {amount}")
        self.balance += amount
        print(f"Your new balance is: {self.balance}")
        return self

    def withdraw(self, amount):
        print(f"Thank you for withdrawing: {amount}")
        self.balance -= amount
        print(f"Your new balance is: {self.balance}")
        return self

    def display_account_info(self):
        print("Your Interest Rate is: ", self.int_rate)
        print("Your Balance is: ", self.balance)
        return self

    def yield_interest(self):
        print(f"Interest is free money: {self.int_rate}")
        self.balance = (self.int_rate * self.balance)
        print(f"Your new balance is: {self.balance}")
        return self

    @classmethod
    def all_balances(cls):
        print("Here is a list of the accounts: ")
        for account in cls.all_accounts:
            print(f"Name: {account.name} Balance: {account.balance}")

adam = BankAccount("Adam", 1050)
cody = BankAccount("Cody", 6)

adam.deposit(100).deposit(200).deposit(50).withdraw(250).yield_interest().display_account_info()

cody.deposit(50).deposit(200).withdraw(100).withdraw(100).withdraw(100).withdraw(100).yield_interest().display_account_info()

BankAccount.all_balances()