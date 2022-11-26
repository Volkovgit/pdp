// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// rl.question('What is your favorite food? ', (answer) => {
//   console.log(`Oh, so your favorite food is ${answer}`);
//   rl.close();
// });

// loop()

// console.log(checkNumber('ad'));

// inputParent.prototype.validateInputString = function(string,errorMsg,errorCode,regexp){
//   if (!regexp.test(string))
//     throw new Error(
//       JSON.stringify({
//         message: errorMsg,
//         code: errorCode,
//       }),
//     );
//   return true;
// };

function normalizeInputBoardCoordinate(str) {
  return str
    .split('')
    .filter((el) => el != ' ')
    .map((el) => Number(el));
}

const inputStream = require('./src/inputStream');
const test = new inputStream();

function checkNumber(number) {
  return isNaN(number);
}
function loop() {
  test.stringInput('Enter number ', function (answer) {
    if (checkNumber(answer)) {
      loop(answer);
    } else {
      return;
    }
  });
}

loop();

return {
  boardObj,
  inputCoorinates,
  currentUser: true,
  startGame() {
    function checkInputStringByRegexp(regexp, string) {
      return regexp.test(string);
    }
    function normalizeInputBoardCoordinate(str) {
      return str
        .split('')
        .filter((el) => el != ' ')
        .map((el) => Number(el));
    }
    function loop() {
      inputCoorinates.stringInput('Введите координаты ', function (answer) {
        if (!checkInputStringByRegexp(/^[123]\s{0,}[123]$/, answer)) {
          console.log('Должны быть введены 2 числа от 1 до 3');
          loop(answer);
        } else {
          let coordinates = normalizeInputBoardCoordinate(answer);
          console.log(coordinates);
        }
        return;
      });
    }
    loop();
    // this.checkElementIsEmptyAndSetInBoard(this.coordinates);
    // if (this.checkEndOfGame()) return this.startGame();
  },

  ,

  checkElementIsEmptyAndSetInBoard(data) {
    if (this.boardObj.checkElementIsEmpty(data)) {
      this.boardObj.setElementToBoard(data, this.currentUser ? 'x' : 'o');
    } else {
      console.log('\nЭта клетка уже занята. Выберите другую');
    }
  },
};

{
  if (this.boardObj.hasEmptyElement()) return true;
  else {
    console.log('\nНичья');
  }
}
