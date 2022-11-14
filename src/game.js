const Board = require('./Board');
const userInput = require('./userInput');

function TicTacToe() {
  const boardObj = Board();
  const input = userInput();
  return {
    boardObj,
    input,
    startGame() {
      this.boardObj.printBoard();
      this.input.userInputCoordinates('Введите координаты').then((data) => {
        if (this.boardObj.checkElementIsEmpty(data)) {
          this.boardObj.setElementToBoard(data, 'x');
        } else {
          console.log('\nЭта клетка уже занята. Выберите другую');
        }
        if (this.boardObj.hasEmptyElement()) this.startGame();
        else this.boardObj.printBoard();
      });
    }
  };
}

TicTacToe().startGame();
