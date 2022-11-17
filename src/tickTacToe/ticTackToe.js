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
    currentUser: true,
    startGame() {
      console.log('\n');
      this.boardObj.printBoard();
      console.log(this.currentUser == users[0] ? 'Ходят крестики' : 'Ходят нолики');
      this.inputCoorinates.input('Введите координаты ').then((data) => {
        try {
          this.checkElementIsEmptyAndSetInBoard(data);
          if (this.boardObj.checkDidIWin(this.currentUser ? 'x' : 'o')){
            console.log(`Победили ${this.currentUser ? 'крестики' : 'нолики'}`);
            this.boardObj.printBoard();
          }
          else {
            this.currentUser = !this.currentUser;
            if (this.boardObj.hasEmptyElement()) this.startGame();
            else{
              console.log('\nНичья');
            }
          }

          
        } catch (error) {
          console.log(error);
        }
      });
    },
    checkElementIsEmptyAndSetInBoard(data) {
      if (this.boardObj.checkElementIsEmpty(data)) {
        this.boardObj.setElementToBoard(data, this.currentUser ? 'x' : 'o');
      } else {
        console.log('\nЭта клетка уже занята. Выберите другую');
      }
    },
  };
}

module.exports = ticTacToe;

ticTacToe([1, 2]).startGame();
