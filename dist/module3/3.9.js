"use strict";
{
    // real implementation
    class Car1 {
        startEngine() {
            console.log("I am starting the engine");
        }
        stopEngine() {
            console.log("I am going to stop the engine.");
        }
        move() {
            console.log("Please move the car");
        }
        test() {
            console.log("I am testing the car");
        }
    }
    const someCar = new Car1();
    someCar.startEngine();
    // creating class using abstract class
    class Car2 {
        test() {
            console.log("I am testing the car");
        }
    }
    class ToytaCar extends Car2 {
        startEngine() {
            console.log("I am starting the car engine");
        }
        stopEngine() {
            console.log("I have stopped the car engine");
        }
        move() {
            console.log("Please move the car");
        }
    }
    //
    class BankAccount {
        constructor(name, balance) {
            this.name = name;
            this.balance = balance;
        }
        deposit(amount) {
            this.balance += amount;
            console.log(`Deposit amount ${amount}. Total balance ${this.balance}`);
        }
        withdraw(amount) {
            if (amount > this.balance) {
                console.log("Insufficient balance");
            }
            else {
                this.balance -= amount;
                console.log(`Withdraw amount ${amount}. Current balance ${this.balance}`);
            }
        }
        showBalance() {
            return this.balance;
        }
    }
    const account = new BankAccount("Mr. S", 5000);
    account.deposit(5000);
    account.withdraw(2000);
    console.log("Current Balance", account.showBalance());
    //
}
