// Create a Bank Account class with a default balance of 0 and interest rate of 0.01

class BankAccount {
    constructor(balance = 0, interestRate = 0.01) {
        this.balance = balance;
        this.interestRate = interestRate;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds: Charging a $5 fee`);
            this.balance -= 5;
        }
        else {
            this.balance -= amount;
        }
        return this;
    }
    displayBalance() {
        console.log(`Balance: ${this.balance}`);
        return this;
    }
    yieldInterest() {
        this.balance += (this.balance * this.interestRate);
        return this;
    }
}

const account1 = new BankAccount();
account1.deposit(100).deposit(200).deposit(300).withdraw(50).yieldInterest().displayBalance();

const account2 = new BankAccount();
account2.deposit(1000).deposit(2000).withdraw(500).withdraw(100).withdraw(100).withdraw(10000).withdraw(100).yieldInterest().displayBalance();