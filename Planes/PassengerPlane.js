const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor(planeInformation) {
        super(planeInformation.model, planeInformation.maxSpeed, planeInformation.maxFlightDistance, planeInformation.maxLoadCapacity);
        this.passengersCapacity = planeInformation.passengersCapacity;
    }

    getPassengersCapacity() {
        return this.passengersCapacity;
    }
}

module.exports = PassengerPlane;