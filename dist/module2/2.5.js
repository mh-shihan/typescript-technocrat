"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Hello Bangladesh");
    const resGeneric = createArrayWithGeneric("Bangladesh");
    const resGenericObj = createArrayWithGeneric({
        name: "Shihan",
        age: 23,
        id: 2221081098,
    });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resTuple = createArrayWithTuple("Bangladesh", "Germany");
    const resTuple1 = createArrayWithTuple("Bangladesh", {
        name: "Shihan",
        age: 23,
        id: 2221081098,
        university: "Uttara University",
    });
    const resGenericObjAndArray = createArrayWithTuple({
        name: "Shihan",
        age: 23,
        id: 2221081098,
    }, [1, 2, 3, 4]);
    const addCourseToStudent = (students) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, students), { course });
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
