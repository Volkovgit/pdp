const board = require('./Board');
const coordinatesInput = require('./coordinatesInput');
const inputer = require('../inputer');

function ticTacToe(...args) {
  const boardObj = board();
  const inputCoorinates = new inputer(coordinatesInput());
  return {
    boardObj,
    inputCoorinates,
    users: args,
    currentUser: args[0],
    winner: null,
    gameStarted: false,
    async startGame() {
      this.printPlayer()
      console.log('\n');
      console.log(this.checkCurrentUser() ? 'Ходят крестики' : 'Ходят нолики');
      this.boardObj.printBoard();
      const inputData = await this.inputCoorinates.input('Введите координаты');
      this.checkElementIsEmptyAndSetInBoard(inputData);
      if (this.checkEndOfGame()) return this.startGame();
      return this.winner;
    },
    printPlayer() {
      if (!this.gameStarted) {
        console.log(`Крестики: игрок ${this.users[0].userName}\nНолики: игрок ${this.users[1].userName}`);
        this.gameStarted = true;
      }
    },
    checkEndOfGame() {
      if (this.boardObj.checkDidIWin(this.checkCurrentUser() ? 'x' : 'o')) {
        console.log(`Победили ${this.currentUser == this.users[0] ? 'крестики' : 'нолики'}`);
        this.boardObj.printBoard();
        this.winner = this.currentUser;
        return false;
      } else {
        this.setNewCurrentUser();
        if (this.boardObj.hasEmptyElement()) return true;
        else {
          console.log('\nНичья');
        }
      }
    },
    checkCurrentUser() {
      return this.currentUser.id == this.users[0].id;
    },
    setNewCurrentUser() {
      if (this.checkCurrentUser()) this.currentUser = this.users[1];
      else this.currentUser = this.users[0];
    },
    checkElementIsEmptyAndSetInBoard(data) {
      if (this.boardObj.checkElementIsEmpty(data)) {
        this.boardObj.setElementToBoard(data, this.checkCurrentUser() ? 'x' : 'o');
      } else {
        console.log('\nЭта клетка уже занята. Выберите другую');
      }
    },
  };
}

module.exports = ticTacToe;