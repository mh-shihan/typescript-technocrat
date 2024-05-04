{
  // Generic type

  type GenericArray<T> = Array<T>;

  const rollNumbers1: number[] = [1, 2, 3];
  const rollNumbers2: Array<number> = [1, 2, 3];
  const rollNumbers3: GenericArray<number> = [1, 2, 3];

  const mentors1: string[] = ["Mr.X", "Mr. Y", "Mr.Z"];
  const mentors2: Array<string> = ["Mr.X", "Mr. Y", "Mr.Z"];
  const mentors3: GenericArray<string> = ["Mr.X", "Mr. Y", "Mr.Z"];

  const booleanArray1: boolean[] = [true, false, true];
  const booleanArray2: Array<boolean> = [true, false, true];
  const booleanArray3: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Shihan",
      age: 23,
    },
    {
      name: "Razzak",
      age: 24,
    },
  ];

  // Generic Tuple
  type GenericTuple<X, Y> = [X, Y];

  const human: GenericTuple<string, string> = ["Mr.X", "Ms.Y"];
  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "Shihan", email: "s@gmail.com" },
  ];

  //
}
