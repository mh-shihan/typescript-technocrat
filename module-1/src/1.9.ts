{
  // Type alias
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: "Shihan",
    age: 23,
    contactNo: "0150000000",
    address: "Dhaka",
  };
  const student2: Student = {
    name: "Razzak",
    age: 24,
    contactNo: "019000000",
    address: "Gazipur",
  };
  const student3: Student = {
    name: "Shadhin",
    age: 24,
    address: "Gazipur",
  };

  console.log(student1, student2, student3);

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
