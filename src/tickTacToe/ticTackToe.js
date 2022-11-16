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
    currentUser:true,
    startGame() {
      console.log(this.currentUser?'Ходят крестики':'Ходят нолики');
      this.boardObj.printBoard();
      this.input.userInputCoordinates('Введите координаты').then((data) => {
        this.checkElementIsEmptyAndSetInBoard(data);
        if (this.boardObj.hasEmptyElement()) this.startGame();
        else this.boardObj.printBoard();
      });
    },
    checkElementIsEmptyAndSetInBoard(data) {
      if (this.boardObj.checkElementIsEmpty(data)) {
        this.boardObj.setElementToBoard(data, this.currentUser?'x':'o');
        this.currentUser = !this.currentUser
      } else {
        console.log('\nЭта клетка уже занята. Выберите другую');
      }
    },
  };
}

module.exports = ticTacToe;


// ticTacToe([1,2]).startGame()