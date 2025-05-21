{
  // Polymorphism
  class Person {
    getSleep(): void {
      console.log("A person generally sleep for 8 hours");
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log("A Student generally sleep for 7 hours");
    }
  }
  class Developer extends Person {
    getSleep(): void {
      console.log("A Developer generally sleep for 6 hours");
    }
  }

  const getSleepTime = (param: Person) => {
    param.getSleep();
  };

  const person = new Person();
  const student = new Student();
  const developer = new Developer();
  getSleepTime(person);
  getSleepTime(student);
  getSleepTime(developer);

  //
}
