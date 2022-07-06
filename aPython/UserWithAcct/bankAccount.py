class User:
    all_users = []

    def __init__(self, name):
        self.name = name
        self.account = BankAccount(0)
        User.all_users.append(self)

    @classmethod
    def all_balances(cls):
        print("Here is a list of the accounts: ")
        for user in cls.all_users:
            print(user.name, user.account.balance)

class BankAccount:
    all_accounts = []

    def __init__(self, balance, int_rate = 1.02):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance = {self.balance}")
        return self

    def yield_interest(self):
        self.balance = (self.int_rate * self.balance)
        print(f"Balance after Interest = {self.balance}")
        return self


adam = User("Adam")
lauren = User("Lauren")

adam.account.deposit(500).deposit(20).deposit(80).withdraw(20).yield_interest().display_account_info()

lauren.account.deposit(200).deposit(40).withdraw(20).withdraw(10).withdraw(100).withdraw(5).yield_interest().display_account_info()

User.all_balances()