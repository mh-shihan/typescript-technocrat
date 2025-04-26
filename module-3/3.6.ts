{
  //
  class BankAccount {
    public readonly id: number;
    public name: string;
    // There is convention to write private properties, it should be start with "_"(under score) like "_balance"
    private _balance: number;

    constructor(id: number, name: string, balance: number, _education: string) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public depositMoney(amount: number) {
      this._balance = this._balance + amount;
    }

    // setter method
    set deposit(amount: number) {
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
