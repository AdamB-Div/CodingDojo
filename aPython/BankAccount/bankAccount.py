class BankAccount:
    all_accounts = []

    def __init__(self, name, int_rate = 1.02, balance = 0):
        self.int_rate = int_rate
        self.balance = balance
        self.name = name
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

    @classmethod
    def all_balances(cls):
        print("All Accounts Info:")
        for account in cls.all_accounts:
            print(f"{account.name} - {account.balance}")

acct1 = BankAccount("Account 1")
acct2 = BankAccount("Account 2")

acct1.deposit(500).deposit(20).deposit(80).withdraw(20).yield_interest().display_account_info()

acct2.deposit(200).deposit(40).withdraw(20).withdraw(10).withdraw(100).withdraw(5).yield_interest().display_account_info()

BankAccount.all_balances()