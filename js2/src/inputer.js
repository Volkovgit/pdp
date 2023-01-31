const inputer = function(strategy){
    this.strategy = strategy
}
inputer.prototype.input = function(...args) {
    return this.strategy.input(...args);
};

module.exports = inputer;