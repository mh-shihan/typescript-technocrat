"use strict";
{
    //
    class BankAccount {
        constructor(id, name, balance, _education) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        depositMoney(amount) {
            this._balance = this._balance + amount;
        }
        // setter method
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
        // public getBalance() {
        //   return this._balance;
        // }
        /**
         * getter method
         * getter method work like function but we can use it as property
         * */
        get balance() {
            return this._balance;
        }
    }
    const poorManAccount = new BankAccount(111, "Mr. Poor", 500, "BSc");
    poorManAccount.deposit = 500;
    const getBalance = poorManAccount.balance;
    console.log(getBalance);
    //
}
