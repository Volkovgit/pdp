function inputValidator() {
  const inputValidatorObject = {
    normalizeInput(str) {
      str = testObj.stringToArr(str);
      str = testObj.deleteSpaces(str);
      str = testObj.strArrToNumber(str);
      str = testObj.deleteNonNumers(str);
      return str
    },
    _stringToArr(str) {
      return str.split('');
    },
    _deleteSpaces(arr) {
      return arr.filter((el) => el != ' ');
    },
    _deleteNonNumers(arr) {
      return arr.filter((el) => !isNaN(el));
    },
    _strArrToNumber(arr) {
      return arr.map((el) => Number(el));
    },
  };

  return inputValidatorObject;
}

module.exports = inputValidator;
