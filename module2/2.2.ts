{
  //interface
  type User1 = {
    //Type alias
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Shihan",
    age: 23,
    role: "admin",
  };

  interface User2 {
    name: string;
    age: number;
  }

  /**
   * We can use type alias for all types of data like primitive or non-primitive data but
   * interface is only used for object
   * */

  //   in JS object -> object, array -> object and function -> object
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const roll1: Roll2 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
