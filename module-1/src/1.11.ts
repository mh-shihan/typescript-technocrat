{
  // turnery operator || optional chaining || nullish coalescing

  const age: number = 25;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "NOt Adult";
  console.log({ isAdult });

  //   nullish coalescing operator works on null or undefined data type
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  //
}
