{
  // oop - inheritence
  //   Person Class
  class Person {
    name: string;
    age: number;
    address: string;
    hours: number;

    constructor(name: string, age: number, address: string, hours: number) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.hours = hours;
    }

    getSleep() {
      console.log(`${this.name} sleep for ${this.hours} hours`);
    }
  }

  //   Student Class
  class Student extends Person {
    constructor(name: string, age: number, address: string, hours: number) {
      super(name, age, address, hours);
    }
  }

  //   Teacher Class
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      hours: number,
      designation: string
    ) {
      super(name, age, address, hours);
      this.designation = designation;
    }

    takeClass() {
      console.log(
        `${this.designation} ${this.name} take class for ${this.hours} hours `
      );
    }
  }

  const student = new Student("Shihan", 24, "Uttara, Dhaka", 8);
  const teacher = new Teacher("Shihan", 24, "Uttara, Dhaka", 8, "Prfessor");

  //
}
