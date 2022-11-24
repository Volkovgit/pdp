const inputParent = require('../inputParent');
const inputStream = require('./inputStream');


function coordinatesInput() {
  inputParent.call(this)
  this.normalizeInputBoardCoordinate =  function (str){
    return str
      .split('')
      .filter((el) => el != ' ')
      .map((el) => Number(el));
  };

  this.input = async function(inputHeader,errorMsg,errorCode,regexp){
    return await this.inputString.stringInput(`${inputHeader} `).then((string) => {
      try {
        this.validateInputString(string,errorMsg,errorCode,regexp);
        return this.normalizeInputBoardCoordinate(string);
      } catch (error) {
        console.log(error);
        return this.input(inputHeader,errorMsg,errorCode,regexp);
      }
    });
  }

}

coordinatesInput.prototype = inputParent.prototype


const test = new coordinatesInput();
test.input('blabla','errorMsg',1,/\d/);


module.exports = coordinatesInput;
