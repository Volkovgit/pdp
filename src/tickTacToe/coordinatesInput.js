const inputStream = require('./inputStream');

function coordinatesInput() {
  const inputString = inputStream();

  const validationInputCoordinates = (str) => {
    const regexpOnlyTwoNumbersAboveZeroLessThree = /^[1,2,3]\s{0,}[1,2,3]$/;
    if (!regexpOnlyTwoNumbersAboveZeroLessThree.test(str))
      throw new Error(
        JSON.stringify({
          message: 'некорректные числа. Введите 2 числа от 1 до 3 через пробел',
          code: 1,
        }),
      );
    return true;
  };

  const normalizeInputBoardCoordinate = (str) => {
    return str
      .split('')
      .filter((el) => el != ' ')
      .map((el) => Number(el));
  };

  return async function input(text) {
    return await inputString.stringInput(`${text} `).then((data) => {
      try {
        validationInputCoordinates(data);
        return normalizeInputBoardCoordinate(data);
      } catch (error) {
        console.log(error);
        return input(text);
      }
    });
  }

}

module.exports = coordinatesInput;
