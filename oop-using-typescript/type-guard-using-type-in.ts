{
  // Type Guard uisng type in
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and I am a ${user.role}`);
    } else {
      console.log(`My name is ${user.name}. I am a normal user`);
    }
  };

  const normalUser: NormalUser = { name: "John Doe" };
  const adminUser: AdminUser = { name: "Shihan", role: "admin" };

  getUser(normalUser);
  getUser(adminUser);

  //
}
