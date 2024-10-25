const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

describe("scooter.rent(user)", () => {
  it("checks a scooter out to a user", () => {
    //Arranged
    const scooter1 = new Scooter("station1");
    const user1 = new User("User1", "password", 21);
    //Acted
    scooter1.rent(user1);
    //Asserted
    expect(scooter1.user).toBe(user1);
    expect(scooter1.station).toBeNull();
  });

  it("throws an error if battery dead", () => {
    //Arranged
    const scooter1 = new Scooter("station1");
    const user1 = new User("User1", "password", 21);
    scooter1.charge = 15;
    //Acted
    function attemptRentOnFaultyScooter() {
      scooter1.rent(user1);
    }
    //Asserted
    expect(attemptRentOnFaultyScooter).toThrow("The Scooter needs to charge");
    expect(scooter1.station).toBe("station1");
    expect(scooter1.user).toBeNull();
  });

  it("throws an error if scooter broken", () => {
    //Arranged
    const scooter1 = new Scooter("station1");
    const user1 = new User("User1", "password", 21);
    scooter1.isBroken = true;
    //Acted
    function attemptRentOnFaultyScooter() {
      scooter1.rent(user1);
    }
    //Asserted
    expect(attemptRentOnFaultyScooter).toThrow(
      "The Scooter needs to be repaired"
    );
    expect(scooter1.station).toBe("station1");
    expect(scooter1.user).toBeNull();
  });
});

describe("scooter.dock(station)", () => {
  it("returns a scooter to a station", () => {
    // Arranged
    const scooter1 = new Scooter(null);
    // Acted
    scooter1.dock("station1");
    // Asserted
    expect(scooter1.station).toBe("station1");
    expect(scooter1.user).toBeNull();
  });
});

describe("scooter.charge()", () => {
  it("recharges a scooter", () => {
    // Arranged
    const scooter1 = new Scooter("station1");
    scooter1.charge = 0;
    // Acted
    scooter1.recharge();
    // Asserted
    expect(scooter1.charge).toBe(100);
  });
});

describe("scooter.repair()", () => {
  it("repairs a scooter", () => {
    // Arranged
    const scooter1 = new Scooter("station1");
    scooter1.isBroken = true;
    // Acted
    scooter1.repair();
    // Asserted
    expect(scooter1.isBroken).toBe(false);
  });
});
