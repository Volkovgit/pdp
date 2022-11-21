const inputStream = require('./tickTacToe/inputStream');

function userNameInput() {
  const inputString = inputStream();

  const validationInputUserName = (str) => {
    const regexpOnlyNumbersLettersUnderscore = /^\d{0,}\w{0,}_{0,}$/;
    if (!regexpOnlyNumbersLettersUnderscore.test(str))
      throw new Error(
        JSON.stringify({
          message: 'Некорректное имя. Для ввода разрешены буквы, числа, нижнее подчеркивание',
          code: 2,
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

module.exports = userNameInput;