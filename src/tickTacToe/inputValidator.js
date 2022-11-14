function inputValidator() {
  const normalizeInputBoardCoordinate = (str) => {
    return str
      .split('')
      .filter((el) => el != ' ')
      .filter((el) => !isNaN(el))
      .map((el) => Number(el));
  };
  const countArgumentsBoardInputCoordinates = (arr) => {
    if (arr.length != 2) return false;
    return true;
  };
  const checkValuesLessThanThreeAndAboveZero = (arr) => {
    return arr.every(el=>(el<=3 && el>0))
  };


  const validationInputCoordinates = (str) => {
    const inputCoordinatesArray = normalizeInputBoardCoordinate(str);
    if (!countArgumentsBoardInputCoordinates(inputCoordinatesArray)) throw new Error('Введены не цифры или значений болье 2');
    if (!checkValuesLessThanThreeAndAboveZero(inputCoordinatesArray)) throw new Error('Выход за пределы доски');
    return inputCoordinatesArray;
  };

  return {
    validationInputCoordinates,
  };
}

module.exports = inputValidator