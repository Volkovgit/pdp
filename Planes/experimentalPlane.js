const Plane = require('./Plane');

class experimentalPlane   extends Plane
{

    constructor(planeInformation)  {
        const {model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel} = {...planeInformation}
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.type = type;
        this.classificationLevel = classificationLevel;
    }


    get model()
    {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    set maxSpeed(value) {
        this._maxSpeed = value;
    }

    get maxFlightDistance() {
        return this._maxFlightDistance;
    }

    set maxFlightDistance(value) {
        this._maxFlightDistance = value;
    }

    get maxLoadCapacity() {
        return this._maxLoadCapacity;
    }

    set maxLoadCapacity(value) {
        this._maxLoadCapacity = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get classificationLevel() {
        return this._classificationLevel;
    }

    set classificationLevel(value) {
        this._classificationLevel = value;
    }
}

module.exports = experimentalPlane