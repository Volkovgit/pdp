const inputStream = require('./tickTacToe/inputStream');

function inputParent() {
  const inputString = inputStream();
  this.validationInputUserName = (string,errorMsg,errorCode,regexp) => {
    const regexpOnlyNumbersLettersUnderscore = regexp;
    if (!regexpOnlyNumbersLettersUnderscore.test(string))
      throw new Error(
        JSON.stringify({
          message: errorMsg,
          code: errorCode,
        }),
      );
    return true;
  };

  this.input = async (inputHeader,errorMsg,errorCode,regexp) =>  {
    return await inputString.stringInput(`${inputHeader} `).then((string) => {
      try {
        validationInputUserName(string,errorMsg,errorCode,regexp);
        return string;
      } catch (error) {
        console.log(error);
        return input(inputHeader,errorMsg,errorCode,regexp);
      }
    });
  }
  return {
    input,
  };
}

module.exports = inputParent;