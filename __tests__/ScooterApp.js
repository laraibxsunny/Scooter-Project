const { describe, expect, it, afterEach } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");

afterEach(() => {
  ScooterApp.stations = {
    station1: [],
    station2: [],
    station3: [],
  };

  ScooterApp.registeredUsers = {};
});

describe("ScooterApp.registerUser(username, password, age)", () => {
  it("registers a new user if old enough", () => {
    // Arranged / Acted
    const user = ScooterApp.registerUser("laraib", "passywordy", 20);

    // Asserted
    expect(ScooterApp.registeredUsers.laraib).toBe(user);
    console.log(ScooterApp.registeredUsers);
  });

  it("throws an error if already registered", () => {
    // Arranged
    const user = ScooterApp.registerUser("laraib", "passywordy", 20);

    // Acted
    function AttemptToRegister() {
      const user2 = ScooterApp.registerUser("laraib", "passywordy", 18);
    }

    // Asserted
    expect(AttemptToRegister).toThrow("Already registered");
    console.log(ScooterApp.registeredUsers);
  });

  it("throws an error if too young", () => {
    // Arranged / Acted
    function AttemptToRegister() {
      const user = ScooterApp.registerUser("laraib", "passywordy", 12);
    }

    // Asserted
    expect(AttemptToRegister).toThrow("Too young to register");
    console.log(ScooterApp.registeredUsers);
  });
});

describe("ScooterApp.loginUser(username, password)", () => {
  it("logs in a registered user", () => {
    // Arranged
    const user = ScooterApp.registerUser("laraib", "4444", 20);

    // Acted
    ScooterApp.loginUser("laraib", "4444");

    // Asserted
    expect(user.loggedIn).toBe(true);
  });

  it("throws an error if password is incorrect", () => {
    // Arranged
    const user = ScooterApp.registerUser("laraib", "4444", 20);

    // Acted
    function WrongPasswordChecker() {
      ScooterApp.loginUser("laraib", "333");
    }

    // Asserted
    expect(WrongPasswordChecker).toThrow();
  });

  it("throws an error if username is incorrect or not found", () => {
    // Arranged
    const user = ScooterApp.registerUser("laraib", "4444", 20);

    // Acted
    function WrongUsernameChecker() {
      ScooterApp.loginUser("frances", "4444");
    }

    // Asserted
    expect(WrongUsernameChecker).toThrow();
  });
});

describe("ScooterApp.logoutUser(username)", () => {
  it.skip("logs out a registered user", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if user not found", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.createScooter(station)", () => {
  it.skip("creates a new scooter and adds it to ScooterApp.stations", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a station does not exist", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
  it.skip("docks a scooter at a station", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a station does not exist", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a scooter is already at a station", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.rentScooter(scooter, user)", () => {
  it.skip("rents a scooter out to a user", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a scooter is already rented", () => {
    // Arrange
    // Act
    // Assert
  });
});
