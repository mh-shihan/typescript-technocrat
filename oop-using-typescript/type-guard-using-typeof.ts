{
  // Type Gurard
  // typeof --> type gurard
  //
  type NumString = number | string;
  const add = (param1: NumString, param2: NumString): NumString => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    }
    return param1.toString() + param2.toString();
  };

  const result1 = add(10, 10);
  const result2 = add("10", "10");
  console.log(result1);
  console.log(result2);
}
