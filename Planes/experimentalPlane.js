const Plane = require("./Plane");

class ExperimentalPlane extends Plane {
  constructor(planeInformation) {
    super(planeInformation);
    this.type = planeInformation.type;
    this.classificationLevel = planeInformation.classificationLevel;
  }


  get maxLoadCapacity() {
    return this._maxLoadCapacity;
  }

  set maxLoadCapacity(value) {
    this._maxLoadCapacity = value;
  }


}

module.exports = ExperimentalPlane;
