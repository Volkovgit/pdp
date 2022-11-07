const Plane = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(planeInformation) {
        super(planeInformation.model, planeInformation.maxSpeed, planeInformation.maxFlightDistance, planeInformation.maxLoadCapacity);
        this.militaryType = planeInformation.militaryType;

    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = MilitaryPlane;