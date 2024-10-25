const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  it("logs a user in if the password is correct", () => {
    // Arranged
    const user1 = new User("user1", "4444", 4);
    // Acted
    user1.login("4444");
    // Asserted
    expect(user1.loggedIn).toBe(true);
  });

  it("throws an error if the password is incorrect", () => {
    // Arranged
    const user1 = new User("user1", "4444", 4);
    // Acted
    function WrongPasswordCheck() {
      user1.login("3333");
    }
    // Asserted
    expect(WrongPasswordCheck).toThrow("*Incorrect Password*");
  });
});

describe("user.logout()", () => {
  it("logs a user out", () => {
    // Arranged
    const user1 = new User("user1", "4444", 4);
    user1.login("4444");
    // Acted
    user1.logout();
    // Asserted
    expect(user1.loggedIn).toBe(false);
  });
});
