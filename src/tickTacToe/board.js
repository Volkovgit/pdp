function Board() {
  return {
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    getBoard() {
      return this.board;
    },
    printBoard() {
      console.log('__|_1_|_2_|_3_|')
      this.board.forEach((row,index) => {
        console.log(`${index+1}_|`, row.join(' | '), '|');
      });
    },
    setElementToBoard(coordinates, elem) {
      this.board[coordinates[0] - 1][coordinates[1] - 1] = elem;
    },
    hasEmptyElement() {
      return !!this.board.find((row) => row.includes(' '));
    },
    checkElementIsEmpty(coordinates) {
      return this.board[coordinates[0] - 1][coordinates[1] - 1]===' '
    },
  };
}

module.exports = Board;
