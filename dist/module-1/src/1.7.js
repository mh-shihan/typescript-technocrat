"use strict";
{
    const group1 = ["Shihan", "Razzak", "Shadhin"];
    const group2 = ["Nabila", "samia", "Tamannur"];
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
    const totalMentor = Object.assign(Object.assign({}, mentors1), mentors2);
    console.log(totalMentor);
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Shihan", "Shadhin", "Razzak", "Jobayer");
}
