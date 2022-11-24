const inputStream = require('./tickTacToe/inputStream');

function consoleInput() {
  const inputString = inputStream();

  const validationInputUserName = (inputHeader,errorMsg = null,errorCode = 0,regexp = /^\d{0,}\w{0,}_{0,}$/) => {
    const regexpOnlyNumbersLettersUnderscore = regexp;
    if (!regexpOnlyNumbersLettersUnderscore.test(inputHeader))
      throw new Error(
        JSON.stringify({
          message: errorMsg,
          code: errorCode,
        }),
      );
    return true;
  };

  async function input(text) {
    return await inputString.stringInput(`${text} `).then((data) => {
      try {
        validationInputUserName(data);
        return data;
      } catch (error) {
        console.log(error);
        return input(text);
      }
    });
  }
  return {
    input,
  };
}

module.exports = consoleInput;