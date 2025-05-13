{
  // oop -class
  class Person1 {
    name: string;
    gender: string;
    age: number;

    constructor(name: string, gender: string, age: number) {
      this.name = name;
      this.gender = gender;
      this.age = age;
    }

    // method
    getDeatils() {
      console.log(
        `The person name is ${this.name} and he/she is a ${this.gender}. He/She is ${this.age} years old`
      );
    }
  }

  class Person2 {
    constructor(
      public name: string,
      public gender: string,
      public age: number
    ) {}

    // method
    getDeatils() {
      console.log(
        `The person name is ${this.name} and he/she is a ${this.gender}. He/She is ${this.age} years old`
      );
    }
  }

  const shihan1 = new Person1("Shihan", "male", 24);
  const nabila1 = new Person1("Nabila", "femal", 23);
  const shihan2 = new Person1("Shihan", "male", 24);
  const nabila2 = new Person1("Nabila", "femal", 23);

  shihan1.getDeatils();
  shihan2.getDeatils();
  nabila1.getDeatils();
  nabila2.getDeatils();

  //
}
