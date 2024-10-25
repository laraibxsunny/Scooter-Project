const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  static stations = {
    station1: [],
    station2: [],
    station3: [],
  };
  static registeredUsers = {};

  static registerUser(username, password, age) {
    if (!Object.hasOwn(ScooterApp.registeredUsers, username) && age >= 18) {
      const user = new User(username, password, age);
      ScooterApp.registeredUsers[username] = user;
      return user;
    } else if (age < 18) {
      throw Error("Too young to register");
    } else if (Object.hasOwn(ScooterApp.registeredUsers, username)) {
      throw Error("Already registered");
    }
  }

  static loginUser(username, password) {
    const user = ScooterApp.registeredUsers[username];

    if (user.username !== username || user.password !== password) {
      throw new Error("Username or Password is Incorrect");
    } else ScooterApp.registeredUsers[username].login(password);
  }

  static logoutUser(username) {
  }
}

module.exports = ScooterApp;
