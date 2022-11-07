const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor(planeInformation) {
        super(planeInformation);
        this.passengersCapacity = planeInformation.passengersCapacity;
    }

    getPassengersCapacity() {
        return this.passengersCapacity;
    }
}

module.exports = PassengerPlane;