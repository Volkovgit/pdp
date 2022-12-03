function board(length,winChecker) {
  function boardGenerator(){
    return Array.apply(null, Array(length)).map((el) => {
      return Array.apply(null,Array(length)).map((el) => ' ')
    });
  }
  this.checker = winChecker;
  this.board = boardGenerator(length);
  this.getBoard = function () {
    return this.board;
  };
  this.boardToString = function () {
    let str = '__|_1_|_2_|_3_|';
    this.board.forEach((row, index) => {
      str = str + '\n' + `${index + 1} |` + ' ' + row.join(' | ') + ' |';
    });
    return str;
  };
  this.printBoard = function () {
    console.log(this.boardToString());
  };
  this.setElementToBoard = function (coordinates, elem) {
    this.board[coordinates[0] - 1][coordinates[1] - 1] = elem;
  };
  this.hasEmptyElement = function () {
    return !!this.board.find((row) => row.includes(' '));
  };
  this.checkElementIsEmpty = function (coordinates) {
    return this.board[coordinates[0] - 1][coordinates[1] - 1] === ' ';
  };
  this.checkDidIWin = function (elem) {
    return this.checker.check(this.board, elem);
  };
}

module.exports = board;
