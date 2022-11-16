function inputValidator() {
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

  

  return {
    validationInputCoordinates,
    validationInputUserName,
  };
}

module.exports = inputValidator;
