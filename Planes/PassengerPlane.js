const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor(planeInformation) {
        const {model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity} = {...planeInformation}
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }

    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PassengerPlane;