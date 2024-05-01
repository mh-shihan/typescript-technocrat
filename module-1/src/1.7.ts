{
  const group1: string[] = ["Shihan", "Razzak", "Shadhin"];
  const group2: string[] = ["Nabila", "samia", "Tamannur"];

  group1.push(...group2);
  //   console.log(group1);

  const mentors1 = {
    typescript: "Mezba",
    nextJs: "Tonmoy",
    redux: "Mir",
  };

  const mentors2 = {
    prisma: "Firoz",
    dbms: "Someone",
    sql: "Anyone",
  };

  const totalMentor = {
    ...mentors1,
    ...mentors2,
  };
  console.log(totalMentor);

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
  };
  greetFriends("Shihan", "Shadhin", "Razzak", "Jobayer");
}
