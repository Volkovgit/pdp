const Board = require("./Board");
const userInput = require("./userInput");

function Game(){
    const boardObj = Board();
    const inputObj = userInput()
    const gameObject = {
        boardObj,
        inputObj,
        playerType:1,
        startGame(){
            this.welcome();
            this.boardObj.printBoard(this.boardObj.getBoard())
        },
        welcome(){
            console.log("Welcome in tic-tac game\nYou wll be X gamer\nGame area:");
        },
        iteration(){
            this.inputObj.input()('Введите строку и столбец :').then(data=>console.log(data))
        }
    }
    return gameObject
}


Game().startGame()
Game().iteration()