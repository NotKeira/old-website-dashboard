function checkStaff(email) {
  const { owners, managers, moderators } = require("../staff.json");

  if (
    owners.includes(email) ||
    managers.includes(email) ||
    moderators.includes(email)
  ) {
    let staff = true;
    console.log("The user is staff");
  } else {
    let staff = false;
    console.log(`The user isn't staff`);
  }
}
