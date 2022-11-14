const board = require('./Board');
const userInput = require('./userInput');

function ticTacToe() {
  const boardObj = board();
  const input = userInput();
  return {
    boardObj,
    input,
    startGame() {
      this.boardObj.printBoard();
      this.input.userInputCoordinates('Введите координаты').then((data) => {
        this.checkElementAndSetInBoard(data);
        if (this.boardObj.hasEmptyElement()) this.startGame();
        else this.boardObj.printBoard();
      });
    },
    checkElementIsEmptyAndSetInBoard(data) {
      if (this.boardObj.checkElementIsEmpty(data)) {
        this.boardObj.setElementToBoard(data, 'x');
      } else {
        console.log('\nЭта клетка уже занята. Выберите другую');
      }
    },
  };
}

module.exports = ticTacToe;

ticTacToe().startGame();
