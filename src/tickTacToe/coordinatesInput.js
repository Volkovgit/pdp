const inputer = require('../inputer');
const inputParent = require('../inputParent');


function coordinatesInput() {
  inputParent.call(this)
  
  this.input = function(inputHeader,errorMsg,errorCode,regexp){
    return this.inputString.stringInput(`${inputHeader} `).then((string) => {
      try {
        this.validateInputString(string,errorMsg,errorCode,regexp);
        return this.normalizeInputBoardCoordinate(string);
      } catch (error) {
        console.log(error);
        return error
      }
    });
  }

}

coordinatesInput.prototype = inputParent.prototype

module.exports = coordinatesInput;
