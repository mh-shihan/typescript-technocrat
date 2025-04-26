"use strict";
{
    const addCourseToStudent = (students) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, students), { course });
    };
    const student1 = addCourseToStudent({
        id: 2221081098,
        name: "Shihan",
        email: "s@gmail.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
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
