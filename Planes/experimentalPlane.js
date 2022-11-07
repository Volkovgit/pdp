const Plane = require("./Plane");

class ExperimentalPlane extends Plane {
  constructor(planeInformation) {
    super(planeInformation);
    this.type = planeInformation.type;
    this.classificationLevel = planeInformation.classificationLevel;
  }

}

module.exports = ExperimentalPlane;
