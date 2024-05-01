"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var group1 = ["Shihan", "Razzak", "Shadhin"];
    var group2 = ["Nabila", "samia", "Tamannur"];
    group1.push.apply(group1, group2);
    //   console.log(group1);
    var mentors1 = {
        typescript: "Mezba",
        nextJs: "Tonmoy",
        redux: "Mir",
    };
    var mentors2 = {
        prisma: "Firoz",
        dbms: "Someone",
        sql: "Anyone",
    };
    var totalMentor = __assign(__assign({}, mentors1), mentors2);
    console.log(totalMentor);
    var greetFriends = function (friends) {
        friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
    };
    greetFriends(["Shihan", "Shadhin", "Razzak", "Jobayer"]);
}
