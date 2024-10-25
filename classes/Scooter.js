class Scooter {
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge > 20 && this.isBroken === false) {
      this.station = null;
      this.user = user;
    } else if (this.charge <= 20) {
      throw Error("The Scooter needs to charge");
    } else if (this.isBroken === true) {
      throw Error("The Scooter needs to be repaired");
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  recharge() {
    this.charge = 100;
  }

  repair() {
    this.isBroken = false;
  }
}

module.exports = Scooter;
