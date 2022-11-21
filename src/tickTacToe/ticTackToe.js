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
    winner: null,
    async startGame() {
      console.log('\n');
      console.log(this.currentUser == users[0] ? 'Ходят крестики' : 'Ходят нолики');
      this.boardObj.printBoard();
      const inputData = await this.inputCoorinates.input('Введите координаты ')
      this.checkElementIsEmptyAndSetInBoard(inputData);
      if (this.checkEndOfGameAndWin()) return this.startGame();
      return this.winner;
    },
    checkEndOfGameAndWin() {
      if (this.boardObj.checkDidIWin(this.currentUser ? 'x' : 'o')) {
        console.log(`Победили ${this.currentUser ? 'крестики' : 'нолики'}`);
        this.boardObj.printBoard();
        this.winner = (this.currentUser ? 'крестики' : 'нолики');
        return false;
      } else {
        this.currentUser = !this.currentUser;
        if (this.boardObj.hasEmptyElement()) return true;
        else {
          console.log('\nНичья');
        }
      }
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

const test = ticTacToe([1, 2]);
test.startGame().then((data) => console.log('check',data));
// console.log(test.getWinner());
