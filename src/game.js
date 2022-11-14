const Board = require('./Board');
const userInput = require('./userInput');
const inputValidator = require('./inputValidator');

function Game() {
  const boardObj = Board();
  const validator = inputValidator();
  const input = userInput();
  async function userInputCoordinates(text) {
    return await input.input(`${text} `).then((data) => {
      try {
        return validator.validationInputCoordinates(data);
      } catch (error) {
        console.log(error);
        return userInputCoordinates(text);
      }
    });
  }

  return {
    boardObj,
    validator,
    input,
    startGame() {
      this.boardObj.printBoard();
      this.userInputCoordinates('Введите координаты').then(data=>{
        this.boardObj.setElementToBoard(data,'x')
        this.startGame()
      })
    },
    userInputCoordinates
  };
}


Game().startGame();