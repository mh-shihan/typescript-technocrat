{
  //

  // typeof operator  ---> type guard

  type AlphaNumeric = string | number;
  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(add("5", 3));

  //   in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}.`);
    } else {
      console.log(`I am a normal user and my name is ${user.name}.`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };

  const adminUser: AdminUser = {
    name: "Mr Admin Bhai",
    role: "admin",
  };

  getUser(adminUser);
  getUser(normalUser);

  //
}
