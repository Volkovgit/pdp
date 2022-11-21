const coordinatesInput = require("./coordinatesInput");

const inputer = function(strategy){
    this.strategy = strategy
}
inputer.prototype.input = function(text = 'Введите что нибудь') {
    return this.strategy(text);
};

module.exports = inputer;

// const inputCoorinates = new inputer(coordinatesInput());
// inputCoorinates.input('Введите два числа через пробел').then(data=>console.log(data))
// console.log();