{
  // OOP ---> Inheritance

  class Parent {
    id: number;
    name: string;
    age: number;
    university: string;

    constructor(id: number, name: string, age: number, university: string) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.university = university;
    }

    getSleep(numOfHours: number) {
      console.log(
        `${this.name} will sleep for ${numOfHours} hours and his id is ${this.id}. ${this.name} is a student of ${this.university}`
      );
    }
  }

  class Student extends Parent {
    constructor(id: number, name: string, age: number, university: string) {
      super(id, name, age, university);
    }
  }

  const student1 = new Student(1098, "Shihan", 23, "Uttara University");
  student1.getSleep(8);

  class Teacher extends Parent {
    designation: string;

    constructor(
      id: number,
      name: string,
      age: number,
      university: string,
      designation: string
    ) {
      super(id, name, age, university);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(
        `${this.name} sir will take ${numOfClass} class and he is a ${this.designation} of ${this.university} `
      );
    }
  }

  const teacher1 = new Teacher(
    1098,
    "Piyal",
    28,
    "Uttara University",
    "Professor"
  );
  teacher1.takeClass(5);

  //
}
