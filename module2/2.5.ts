{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res1 = createArray("Hello Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  interface User {
    name: string;
    age: number;
    id: number;
  }
  const resGenericObj = createArrayWithGeneric<User>({
    name: "Shihan",
    age: 23,
    id: 2221081098,
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const resTuple = createArrayWithTuple<string, string>(
    "Bangladesh",
    "Germany"
  );

  interface Student {
    name: string;
    age: number;
    id: number;
    university: string;
  }
  const resTuple1 = createArrayWithTuple<string, Student>("Bangladesh", {
    name: "Shihan",
    age: 23,
    id: 2221081098,
    university: "Uttara University",
  });

  interface User {
    name: string;
    age: number;
    id: number;
  }

  type numberArray = number[];

  const resGenericObjAndArray = createArrayWithTuple<User, numberArray>(
    {
      name: "Shihan",
      age: 23,
      id: 2221081098,
    },
    [1, 2, 3, 4]
  );

  const addCourseToStudent = <T>(students: T) => {
    const course = "Next Level Web Development";
    return {
      ...students,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Shihan",
    email: "s@gmail.com",
    devType: "NLWD",
  });
  const student12 = addCourseToStudent({
    name: "Razzak",
    email: "s@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
