const PassengerPlane = require("./Planes/PassengerPlane");
const MilitaryPlane = require("./Planes/MilitaryPlane");
const MilitaryType = require("./models/militaryType");
const ExperimentalPlane = require("./Planes/ExperimentalPlane");

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

  // сделать через this.getPassengerPlanes().reduce((prev, current) => {// your code});
  getPassengerPlaneWithMaxPassengersCapacity() {
    return this.getPassengerPlanes().reduce((prev,current)=>{
        if(prev.getPassengersCapacity()>current.getPassengersCapacity()) return prev
        return current
    });
  }

  getTransportMilitaryPlanes() {
    let transportMilitaryPlanes = [];
    this.getMilitaryPlanes().forEach((plane) => {
      if (plane.getMilitaryType() == MilitaryType.TYPE_TRANSPORT)
        transportMilitaryPlanes.push(plane);
    });
    return transportMilitaryPlanes;
  }

  getBomberMilitaryPlanes() {
    let bomberMilitaryPlanes = [];
    this.getMilitaryPlanes().forEach((plane) => {
      if (plane.getMilitaryType() == MilitaryType.BOMBER)
        bomberMilitaryPlanes.push(plane);
    });
    return bomberMilitaryPlanes;
  }

  getExperimentalPlanes() {
    return this.planes.filter((plane) => plane instanceof ExperimentalPlane);
  }

  sortPlanesByMaxDistance() {
    this.planes.sort((currentPlane, preventPlane) =>
      currentPlane.getMaxFlightDistance() > preventPlane.getMaxFlightDistance()
        ? 1
        : -1
    );
    return this;
  }

  sortPlanesByMaxSpeed() {
    this.planes.sort((currentPlane, preventPlane) =>
      currentPlane.getMaxSpeed() > preventPlane.getMaxSpeed() ? 1 : -1
    );
    return this;
  }

  sortPlanesByMaxLoadCapacity() {
    this.planes.sort((currentPlane, preventPlane) =>
      currentPlane.getMaxLoadCapacity() > preventPlane.getMaxLoadCapacity()
        ? 1
        : -1
    );
    return this;
  }

  getPlanes() {
    return this.planes;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
