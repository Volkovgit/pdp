const board = require('./Board');
const coordinatesInput = require('./coordinatesInput');
const inputer = require('../inputer');

function ticTacToe() {
  const boardObj = board();
  const inputCoorinates = new inputer(new coordinatesInput());
  return {
    boardObj,
    inputCoorinates,
    currentUser: true,
    async startGame() {
      this.printTextAndBoard(`${this.currentUser ? 'Ходят крестики' : 'Ходят нолики'}`)
      const inputData = await this.inputCoorinates.input('Введите координаты','Введены некорректные данные. Введите 2 числа от 1 до 3',1,/\d\s{0,}\d/);
      this.checkElementIsEmptyAndSetInBoard(inputData);
      if (this.checkEndOfGame()) return this.startGame();
    },
    printTextAndBoard(text){
      console.log(`\n${text}`);
      this.boardObj.printBoard();
    },
    checkEndOfGame() {
      if (this.boardObj.checkDidIWin(this.currentUser ? 'x' : 'o')) {
        this.printTextAndBoard(`Победили ${this.currentUser ? 'крестики' : 'нолики'}`)
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
