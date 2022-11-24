const inputer = function(strategy){
    this.strategy = strategy
}
inputer.prototype.input = function(text = 'Введите что нибудь') {
    return this.strategy(text);
};

module.exports = inputer;