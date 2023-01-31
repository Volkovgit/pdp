function checkWinner() {
  this.everyElementsInArrayAreEquals = (arr, elem) => {
    return arr.every((val) => val === elem);
  };

  this.reverseMatrix = (matrix) => {
    const reverseMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
      const columns = [];
      matrix.forEach((row) => {
        columns.push(row[i]);
      });
      reverseMatrix.push(columns);
    }
    return reverseMatrix;
  };

  this.checkColumWinner = (board, elem) => {
    const matrix = this.reverseMatrix(board);
    return matrix.some((row) => this.everyElementsInArrayAreEquals(row, elem) === true);
  };

  this.checkRowWinner = (board, elem) => {
    return board.some((row) => this.everyElementsInArrayAreEquals(row, elem) === true);
  };

  this.checkMainDiagonal = (board, elem) => {
    const diagonalElements = board.map((elem, index) => board[index][index]);
    return this.everyElementsInArrayAreEquals(diagonalElements, elem);
  };

  this.checkSideDiagonal = (board, elem) => {
    const boardLength = board.length - 1;
    const diagonalElements = board.map((elem, index) => board[index][boardLength - index]);
    return this.everyElementsInArrayAreEquals(diagonalElements, elem);
  };

  this.checkDiagonalWinner = (board, elem) => {
    if (this.checkMainDiagonal(board, elem) || this.checkSideDiagonal(board, elem)) return true;
    return false;
  };

  this.check = (board, elem) => {
    return (
      this.checkDiagonalWinner(board, elem) ||
      this.checkColumWinner(board, elem) ||
      this.checkRowWinner(board, elem)
    );
  };
}

module.exports = checkWinner;
