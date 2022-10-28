import rbx from "noblox.js";
import passCreate from "../JS/passphrases.js";
const button = document.getElementById("btnn");
button.onclick = function () {
  console.log("Login Setup");
  const username = document.getElementById("uname");
  const userID = rbx.getIdFromUsername(username);
  rbx.getBlurb(userID);
  if (rbx.getBlurb(userID) == passCreate) {
    this.alert(`Logged in as ${username}`);
  } else {
    this.alert(`Could not verify account ownership. Try again.`);
  }
};
