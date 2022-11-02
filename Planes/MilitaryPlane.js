const Plane = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(planeInformation) {
        const {model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType} = {...planeInformation}
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.militaryType = militaryType;

    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = MilitaryPlane;