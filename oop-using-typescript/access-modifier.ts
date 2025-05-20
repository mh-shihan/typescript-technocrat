{
  // Access Modifier
  // There is convention to write private properties, it should be start with "_"(under score) like "_balance"
  class Person {
    public readonly name: string;
    public age: number;
    protected education: string;
    private _salary: number;

    constructor(name: string, age: number, education: string, _saraly: number) {
      this.name = name;
      this.age = age;
      this.education = education;
      this._salary = _saraly;
    }

    addSalary(amount: number) {
      this._salary += amount;
    }

    getSalary() {
      console.log(`Salary --> ${this._salary}`);
    }
  }

  class Student extends Person {
    modifyEducation(edu: string) {
      return (this.education = edu);
    }

    viewEducation() {
      console.log(`Education ${this.education}`);
    }
  }

  const person = new Person("shihan", 24, " BSc", 25000);
  const student = new Student("shihan", 24, " BSc", 25000);
  person.getSalary();
  student.viewEducation();

  student.modifyEducation("Under Graduate");
  student.viewEducation();
  //
}
