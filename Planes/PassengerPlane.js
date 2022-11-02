const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor(flyInformation) {
        const {model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity} = {flyInformation}
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }

    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PassengerPlane;