const board = require('./Board');
const coordinatesInput = require('./coordinatesInput');
// const ticTacToeConst = require('./tickTackToeConstant');

function ticTacToe(users) {
  const boardObj = board();
  const inputCoorinates = coordinatesInput();
  return {
    boardObj,
    inputCoorinates,
    users,
    currentUser:true,
    startGame() {
      console.log(this.currentUser == users[0]?'Ходят крестики':'Ходят нолики');
      this.boardObj.printBoard();
      this.inputCoorinates.input('Введите координаты ').then((data) => {
        try {
          this.checkElementIsEmptyAndSetInBoard(data)
          if (this.boardObj.hasEmptyElement()) this.startGame();
        } catch (error) {
          console.log(error);
        }
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


ticTacToe([1,2]).startGame()