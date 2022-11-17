function checkWinner() {
  const everyElementsInArrayAreEquals = (arr, elem) => {
    return arr.every((val) => val === elem);
  };

  const reverseMatrix = (matrix) => {
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

  const checkColumWinner = (board, elem) => {
    const matrix = reverseMatrix(board);
    return matrix.some((row) => everyElementsInArrayAreEquals(row, elem) === true);
  };

  const checkRowWinner = (board, elem) => {
    return board.some((row) => everyElementsInArrayAreEquals(row, elem) === true);
  };

  const checkMainDiagonal = (board, elem) => {
    const diagonalElements = board.map((elem, index) => board[index][index]);
    return everyElementsInArrayAreEquals(diagonalElements, elem);
  };

  const checkSideDiagonal = (board, elem) => {
    const boardLength = board.length - 1;
    const diagonalElements = board.map((elem, index) => board[index][boardLength - index]);
    return everyElementsInArrayAreEquals(diagonalElements, elem);
  };

  const checkDiagonalWinner = (board, elem) => {
    if (checkMainDiagonal(board, elem) || checkSideDiagonal(board, elem)) return true;
    return false;
  };

  const check = (board, elem) => {
    return (
      checkDiagonalWinner(board, elem) ||
      checkColumWinner(board, elem) ||
      checkRowWinner(board, elem)
    );
  };
  return {
    check,
  };
}

module.exports = checkWinner;
