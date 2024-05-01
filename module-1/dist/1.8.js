"use strict";
{
    // Destructuring
    var user_1 = {
        id: 1234,
        name: {
            firstName: "Mahmudul",
            middleName: "Hasan",
            lastName: "Shihan",
        },
        contactNo: "01521755633",
        address: {
            district: "Narayangonj",
            than: "Araihazar",
            village: "Dashirdia",
        },
    };
    var contactNo = user_1.contactNo, lastName = user_1.name.lastName;
    console.log(contactNo, lastName);
}
