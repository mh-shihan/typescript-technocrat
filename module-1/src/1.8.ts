{
  // Destructuring

  const user = {
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

  const {
    contactNo,
    name: { lastName },
  } = user;

  console.log(contactNo, lastName);
}
