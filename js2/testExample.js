let boardGeneraor = Array(3).fill(Array(3).fill(' '));
console.log(boardGeneraor);
boardGeneraor[1][1] = 'x';
console.log(boardGeneraor);
console.log('----------------------------');
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];
console.log(board);
board[1][1] = 'x';
console.log(board);
console.log('----------------------------');
let board3 = Array.apply(null, Array(3)).map((el) => {
  return Array.apply(null,Array(3)).map((el) => '')
});
console.log(board3);
board3[1][1]=1
console.log(board3);

// boardGeneraor[1][1] = 'x';
// console.log(boardGeneraor);
