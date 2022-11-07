const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor(planeInformation) {
        super(planeInformation.model, planeInformation.maxSpeed, planeInformation.maxFlightDistance, planeInformation.maxLoadCapacity);
        this._passengersCapacity = planeInformation.passengersCapacity;
    }

    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PassengerPlane;