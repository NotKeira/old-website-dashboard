async function  checkStaff(email) {
  const staff = require("../staff.json");
  const stuff = require("./stuff.json")
  const noblox = require("noblox.js");
  const group = await noblox.getGroup(stuff.groupID);
  

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
