const { expect } = require('chai');
const board = require('../../src/tickTacToe/Board');

describe('board', () => {
  let boardClass;
  beforeEach(() => {
    boardClass = new board();
  });
  it('Should return object', () => {
    expect(boardClass).to.be.an('object');
  });
  it("Should return 3x3 matrix with ' ' elements on initialize", () => {
    expect(boardClass.getBoard()).to.deep.equal([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]);
  });
  it('Should set element to board by coordinates', () => {
    const initializeBoard = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    const boardBeforeInsertAllElement = [
      ['o', 'o', ' '],
      [' ', ' ', 'x'],
      [' ', ' ', ' '],
    ];
    expect(boardClass.getBoard()).to.deep.equal(initializeBoard);
    boardClass.setElementToBoard([1, 1], 'x');
    boardClass.setElementToBoard([1, 1], 'o');
    boardClass.setElementToBoard([1, 2], 'o');
    boardClass.setElementToBoard([2, 3], 'x');
    expect(boardClass.getBoard()).to.deep.equal(boardBeforeInsertAllElement);
  });

  it("Should return true if board has although one empty(' ') element and false differently ", () => {
    expect(boardClass.hasEmptyElement()).to.equal(true);
    boardClass.setElementToBoard([1, 1], 'x');
    boardClass.setElementToBoard([1, 2], 'x');
    boardClass.setElementToBoard([1, 3], 'x');
    boardClass.setElementToBoard([2, 1], 'x');
    boardClass.setElementToBoard([2, 2], 'x');
    boardClass.setElementToBoard([2, 3], 'x');
    boardClass.setElementToBoard([3, 1], 'x');
    boardClass.setElementToBoard([3, 2], 'x');
    expect(boardClass.hasEmptyElement()).to.equal(true);
    boardClass.setElementToBoard([3, 3], 'x');
    expect(boardClass.hasEmptyElement()).to.equal(false);
  });

  it('Should return true if elements in board are empty', () => {
    expect(boardClass.checkElementIsEmpty([1, 1])).to.equal(true);
    boardClass.setElementToBoard([1, 1], 'x');
    expect(boardClass.checkElementIsEmpty([1, 1])).to.equal(false);
  });

  describe('Should return true if any element in board has win-line', () => {
    it('win by row', () => {
      expect(boardClass.checkDidIWin('x')).to.equal(false);
      boardClass.setElementToBoard([1, 1], 'x');
      boardClass.setElementToBoard([1, 2], 'x');
      boardClass.setElementToBoard([1, 3], 'x');
      boardClass.setElementToBoard([2, 2], 'o');
      boardClass.setElementToBoard([2, 3], 'o');
      expect(boardClass.checkDidIWin('x')).to.equal(true);
      expect(boardClass.checkDidIWin('o')).to.equal(false);
    });
    it('win by column', () => {
      expect(boardClass.checkDidIWin('x')).to.equal(false);
      boardClass.setElementToBoard([1, 1], 'x');
      boardClass.setElementToBoard([2, 1], 'x');
      boardClass.setElementToBoard([3, 1], 'x');
      boardClass.setElementToBoard([2, 2], 'o');
      boardClass.setElementToBoard([2, 3], 'o');
      expect(boardClass.checkDidIWin('x')).to.equal(true);
      expect(boardClass.checkDidIWin('o')).to.equal(false);
    });
    it('win by main diagonal', () => {
      expect(boardClass.checkDidIWin('x')).to.equal(false);
      boardClass.setElementToBoard([1, 1], 'x');
      boardClass.setElementToBoard([2, 2], 'x');
      boardClass.setElementToBoard([3, 3], 'x');
      boardClass.setElementToBoard([2, 3], 'o');
      boardClass.setElementToBoard([1, 3], 'o');
      expect(boardClass.checkDidIWin('x')).to.equal(true);
      expect(boardClass.checkDidIWin('o')).to.equal(false);
    });
    it('win by side diagonal', () => {
      expect(boardClass.checkDidIWin('x')).to.equal(false);
      boardClass.setElementToBoard([1, 3], 'x');
      boardClass.setElementToBoard([2, 2], 'x');
      boardClass.setElementToBoard([3, 1], 'x');
      boardClass.setElementToBoard([2, 3], 'o');
      boardClass.setElementToBoard([1, 1], 'o');
      expect(boardClass.checkDidIWin('x')).to.equal(true);
      expect(boardClass.checkDidIWin('o')).to.equal(false);
    });
  });
});
