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
      this.board.forEach((row) => {
        console.log('|', row.join(' | '), '|');
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
