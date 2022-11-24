const inputStream = require('./tickTacToe/inputStream');

function inputParent () {
  this.inputString = inputStream();
}

inputParent.prototype.validateInputString = function(string,errorMsg,errorCode,regexp){
  if (!regexp.test(string))
    throw new Error(
      JSON.stringify({
        message: errorMsg,
        code: errorCode,
      }),
    );
  return true;
};
inputParent.prototype.input = async function(inputHeader,errorMsg,errorCode,regexp){
  return await this.inputString.stringInput(`${inputHeader} `).then((string) => {
    try {
      this.validateInputString(string,errorMsg,errorCode,regexp);
      return string;
    } catch (error) {
      console.log(error);
      return this.input(inputHeader,errorMsg,errorCode,regexp);
    }
  });
}

module.exports = inputParent;




