"use strict";
{
    // Type assertion
    let anything;
    anything = "Next Level Web Development";
    anything = 7878980;
    //   (anything as number).
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value);
            return `The converted value is ${convertedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGram(1000);
    const result2 = kgToGram("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
