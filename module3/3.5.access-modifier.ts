{
  //
  class BankAccount {
    public readonly id: number;
    public name: string;
    // There is convention to write private properties, it should be start with "_"(under score) like "_balance"
    private _balance: number;
    protected _education: string;

    constructor(id: number, name: string, balance: number, _education: string) {
      this.id = id;
      this.name = name;
      this._balance = balance;
      this._education = _education;
    }

    public depositMoney(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
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
