const Plane = require("./Plane");

class MilitaryPlane extends Plane {
  constructor(planeInformation) {
    super(planeInformation);
    this.militaryType = planeInformation.militaryType;
  }

  getMilitaryType() {
    return this.militaryType;
  }
}

module.exports = MilitaryPlane;
