"use strict";
{
    //
    class BankAccount {
        constructor(id, name, balance, _education) {
            this.id = id;
            this.name = name;
            this._balance = balance;
            this._education = _education;
        }
        depositMoney(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            return this._education;
        }
    }
    const poorManAccount = new BankAccount(111, "Mr. Poor", 500, "BSc");
    //   poorManAccount.id = "Mr. Y";
    poorManAccount.depositMoney(300);
    const myBalance = poorManAccount.getBalance();
    console.log(myBalance);
    //
}
