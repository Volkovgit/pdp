// function validator() {
//   this.input = function () {};
// }

// function validateInputCoordinates() {
//   const normalizeInputBoardCoordinate = (str) => {
//     return str
//       .split('')
//       .filter((el) => el != ' ')
//       .filter((el) => !isNaN(el))
//       .map((el) => Number(el));
//   };
//   const countArgumentsBoardInputCoordinates = (arr) => {
//     if (arr.length != 2) return false;
//     return true;
//   };
//   const checkValuesLessThanThreeAndAboveZero = (arr) => {
//     return arr.every((el) => el <= 3 && el > 0);
//   };

//   this.input = (str) => {
//     const inputCoordinatesArray = normalizeInputBoardCoordinate(str);

//     if (!countArgumentsBoardInputCoordinates(inputCoordinatesArray))
//       throw new Error('Введены не цифры или значений болье 2');
//     if (!checkValuesLessThanThreeAndAboveZero(inputCoordinatesArray))
//       throw new Error('Выход за пределы доски');
//     return inputCoordinatesArray;
//   };
// }

// validateInputCoordinates.prototype = new validator();
// console.log(validateInputCoordinates.prototype);
// validateInputCoordinates.prototype.constructor = validateInputCoordinates;

// function Context(strategy) {
//   this.input1 = function (str) {
//     return strategy.input(str);
//   };
// }

// const checkTestContext = new Context(new validateInputCoordinates());

// console.log(checkTestContext.input1('1 1'));

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
  const boardLength = board.length-1
  const diagonalElements = board.map((elem, index) => board[index][boardLength-index]);
  return everyElementsInArrayAreEquals(diagonalElements, elem);
};

const checkDiagonalWinner = (board, elem) => {
  if (checkMainDiagonal(board, elem) || checkSideDiagonal(board, elem) ) return true;
  return false;
};


const checkWihher =(board,elem)=>{
  return(checkDiagonalWinner(board,elem)||checkColumWinner(board,elem)||checkRowWinner(board,elem))
}

const board = [
  ['2', '1', '2'],
  ['1', '3', ' '],
  ['2', 'j', '1'],
];

const board2 = [
  ['1', 'j', '2','3'],
  ['x', '2', '3','3'],
  ['2', '3', '1','3'],
  ['3', 'j', '1','3'],
];



console.log(checkWihher(board, '2'));
console.log(checkWihher(board2, '3'));
