const BoardPrinter = require('./BoardPrinter');

function Board() {
  const height = 3;
  const width = 3;
  // Найти в чем причина, при обращении по индексу к массиву от сюда заменяется весь столбец
  const createBoard = () => {
    const rows = Array(width).fill(' ');
    const table = Array(height).fill(rows);
    return table;
  };

  const boardObject = {
    board: [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ],
    printer: new BoardPrinter(),
    getBoard() {
      return this.board;
    },
    updateBoard(newBoard) {
      this.board = newBoard;
    },
    printBoard(){
        this.printer.printBoard(this.board);
    },
    setElementToBoard(i,j,elem){
        this.board[i][j]=elem;
    },
    clearBoard(){
        this.board = [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ];
    }
  };

  return boardObject;
}

module.exports = Board;
