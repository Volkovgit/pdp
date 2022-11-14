const board = require('./Board');
const userInput = require('./userInput');
const ticTacToeConst = require('./tickTackToeConstant')

function ticTacToe(user) {
  const boardObj = board();
  const input = userInput();
  const countPartType = user.length === 2 ? ticTacToeConst.TWO_PLAYER : ticTacToeConst.SINGLE_GAME;
  return {
    partType: countPartType,
    boardObj,
    input,
    user,
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
