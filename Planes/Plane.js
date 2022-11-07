class Plane {
  constructor(planeInformation) {
    this.model = planeInformation.model;
    this.maxSpeed = planeInformation.maxSpeed;
    this.maxFlightDistance = planeInformation.maxFlightDistance;
    this.maxLoadCapacity = planeInformation.maxLoadCapacity;
  }

  getModel() {
    return this.model;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }

  getMaxFlightDistance() {
    return this.maxFlightDistance;
  }

  getMaxLoadCapacity() {
    return this.maxLoadCapacity;
  }
}

module.exports = Plane;
