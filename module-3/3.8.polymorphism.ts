{
  //
  class Person {
    getSleep() {
      console.log("A general man sleep for 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("A student sleep for 7 hours per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("A student sleep for 6 hours per day");
    }
  }

  const getSleepPerDay = (param: Person) => {
    return param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepPerDay(person1);
  getSleepPerDay(person2);
  getSleepPerDay(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape = new Shape();
  const circle = new Circle(5);
  const rectangle = new Rectangle(10, 8);

  getShapeArea(rectangle);

  //
}
