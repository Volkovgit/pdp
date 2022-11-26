const inputStream = require('./inputStream');

function inputParent () {
  this.inputString = inputStream();
}


inputParent.prototype.input = function(inputHeader,callback){
  this.inputString.stringInput(`${inputHeader} `,callback);
}

module.exports = inputParent;




