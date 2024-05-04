{
  // Constrains

  interface Student {
    id: number;
    name: string;
    email: string;
  }

  const addCourseToStudent = <T extends Student>(students: T) => {
    const course = "Next Level Web Development";
    return {
      ...students,
      course,
    };
  };

  const student1 = addCourseToStudent<Student & { devType: string }>({
    id: 2221081098,
    name: "Shihan",
    email: "s@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent<Student & { hasWatch: string }>({
    id: 2221081081,
    name: "Razzak",
    email: "s@gmail.com",
    hasWatch: "Apple Watch",
  });
  const student3 = addCourseToStudent({
    id: 2221081081,
    name: "Razzak",
    email: "s@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
