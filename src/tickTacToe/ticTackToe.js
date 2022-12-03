const board = require('./Board');
const inputer = require('../inputer');
const consoleInput = require('../consoleInput');

function ticTacToe() {
  this.boardObj = new board(3);
  this.newInput = new inputer(new consoleInput());
  this.currentUser = true;
  this.printTextAndBoard = (text) => {
    console.log(`${text ? text : ''}`);
    this.boardObj.printBoard();
  };
  this.checkInputStringByRegexp = (regexp, string) => {
    return regexp.test(string);
  };
  this.normalizeInputBoardCoordinate = (str) => {
    return str
      .split('')
      .filter((el) => el != ' ')
      .map((el) => Number(el));
  };
  this.checkElementIsEmpty = (coordinates) => {
    return this.boardObj.checkElementIsEmpty(coordinates);
  };
  this.checkEndOfGame = () => {
    return this.boardObj.checkDidIWin(this.currentUser ? 'x' : 'o');
  };
  this.getCurrentPlayer = () => {
    return this.currentUser ? 'крестики' : 'нолики';
  };
  this.startGame = () => {
    const loop = () => {
      if (!this.boardObj.hasEmptyElement()) {
        this.printTextAndBoard(`Ничья ${this.getCurrentPlayer()}`);
      } else if (!this.checkEndOfGame()) {
        this.printTextAndBoard();
        console.log(`Ходят ${this.getCurrentPlayer()}`);
        this.newInput.input('Введите координаты ', (answer) => {
          if (!this.checkInputStringByRegexp(/^[123]\s{0,}[123]$/, answer)) {
            console.log('Должны быть введены 2 числа от 1 до 3');
            loop(answer);
          } else {
            let coordinates = this.normalizeInputBoardCoordinate(answer);
            if (this.checkElementIsEmpty(coordinates)) {
              this.boardObj.setElementToBoard(coordinates, this.currentUser ? 'x' : 'o');
              if (!this.checkEndOfGame()) {
                this.currentUser = !this.currentUser;
                loop(answer);
              } else {
                this.printTextAndBoard(`Победили ${this.getCurrentPlayer()}`);
              }
            } else {
              console.log('\nЭта клетка уже занята. Выберите другую');
              loop(answer);
            }
          }
        });
      } else if (this.checkEndOfGame()) {
        this.printTextAndBoard(`Победили ${this.getCurrentPlayer()}`);
      }
    };
    loop();
  };
}

module.exports = ticTacToe;
