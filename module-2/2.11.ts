{
  // utility types

  // Pick type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //   Omit type
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required type
  type PersonRequired = Required<Person>;

  //   Partial type
  type PersonPartial = Partial<Person>;

  //   ReadOnly type
  type PersonReadOnly = Readonly<Person>;

  //   Record type **
  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {}; //* very very important

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };

  //
}
