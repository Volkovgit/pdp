const PassengerPlane = require("./Planes/passengerPlane");
const MilitaryPlane = require("./Planes/militaryPlane");
const MilitaryType = require("./models/militaryType");
const ExperimentalPlane = require("./Planes/experimentalPlane");

class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPassengerPlanes() {
    return this.planes.filter((plane) => plane instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter((plane) => plane instanceof MilitaryPlane);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    return this.getPassengerPlanes().reduce((prev, current) => {
      if (prev.getPassengersCapacity() > current.getPassengersCapacity())
        return prev;
      return current;
    });
  }

  getTransportMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT
    );
  }

  getBomberMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.getMilitaryType() === MilitaryType.TYPE_BOMBER
    );
  }

  getExperimentalPlanes() {
    return this.planes.filter((plane) => plane instanceof ExperimentalPlane);
  }

  sortPlanesByMaxDistance() {
    return this.planes.sort((currentPlane, preventPlane) =>
      currentPlane.getMaxFlightDistance() > preventPlane.getMaxFlightDistance()
        ? 1
        : -1
    );
  }

  sortPlanesByMaxSpeed() {
    return this.planes.sort((currentPlane, preventPlane) =>
      currentPlane.getMaxSpeed() > preventPlane.getMaxSpeed() ? 1 : -1
    );
  }

  sortPlanesByMaxLoadCapacity() {
    return this.planes.sort((currentPlane, preventPlane) =>
      currentPlane.getMaxLoadCapacity() > preventPlane.getMaxLoadCapacity()
        ? 1
        : -1
    );
  }


  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
