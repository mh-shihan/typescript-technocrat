{
  // abstraction : 1. interface 2. abstract
  // idea
  interface Vehicle1 {
    startEngine(): void;
    move(): void;
    stopEngine(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the engine");
    }

    stopEngine(): void {
      console.log("I am going to stop the engine.");
    }

    move(): void {
      console.log("Please move the car");
    }

    test(): void {
      console.log("I am testing the car");
    }
  }

  const someCar = new Car1();
  someCar.startEngine();

  // creating class using abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test(): void {
      console.log("I am testing the car");
    }
  }

  class ToytaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }

    stopEngine(): void {
      console.log("I have stopped the car engine");
    }

    move(): void {
      console.log("Please move the car");
    }
  }

  //
  class BankAccount {
    name: string;
    balance: number;

    constructor(name: string, balance: number) {
      this.name = name;
      this.balance = balance;
    }

    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposit amount ${amount}. Total balance ${this.balance}`);
    }
    withdraw(amount: number): void {
      if (amount > this.balance) {
        console.log("Insufficient balance");
      } else {
        this.balance -= amount;
        console.log(
          `Withdraw amount ${amount}. Current balance ${this.balance}`
        );
      }
    }

    showBalance(): number {
      return this.balance;
    }
  }

  const account = new BankAccount("Mr. S", 5000);
  account.deposit(5000);
  account.withdraw(2000);
  console.log("Current Balance", account.showBalance());
  //
}
