const board = require('./Board');
const coordinatesInput = require('./coordinatesInput');
const inputer = require('../inputer');

const inputStream = require('../inputStream');

function ticTacToe() {
  const boardObj = board();
  const inputCoorinates = new inputStream();
  let currentUser = false;
  this.startGame = function () {
    function printTextAndBoard(text) {
      console.log(`${text ? text : ''}`);
      boardObj.printBoard();
    }
    function checkInputStringByRegexp(regexp, string) {
      return regexp.test(string);
    }
    function normalizeInputBoardCoordinate(str) {
      return str
        .split('')
        .filter((el) => el != ' ')
        .map((el) => Number(el));
    }
    function checkElementIsEmpty(coordinates) {
      return boardObj.checkElementIsEmpty(coordinates);
    }
    function checkEndOfGame() {
      return boardObj.checkDidIWin(currentUser ? 'x' : 'o');
    }
    function loop() {
      if (!checkEndOfGame()) {
        printTextAndBoard();
        inputCoorinates.stringInput('Введите координаты ', function (answer) {
          if (!checkInputStringByRegexp(/^[123]\s{0,}[123]$/, answer)) {
            console.log('Должны быть введены 2 числа от 1 до 3');
            loop(answer);
          } else {
            let coordinates = normalizeInputBoardCoordinate(answer);
            currentUser = !currentUser
            if (checkElementIsEmpty(coordinates)) {
              boardObj.setElementToBoard(coordinates, currentUser ? 'x' : 'o');
              loop(answer);
            } else {
              console.log('\nЭта клетка уже занята. Выберите другую');
              loop(answer);
            }
          }
        });
      }
      else{
        printTextAndBoard(`Победили ${currentUser?'крестики':'нолики'}`);
      }
    }
    loop();
  };
}

module.exports = ticTacToe;
