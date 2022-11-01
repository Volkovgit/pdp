const { expect } = require('chai');
const Board = require('../src/tic-tac/Board');

describe('Board', () => {
  it('Should be a function', () => {
    expect(Board).to.be.a('function');
  });
  it('Should return Object', () => {
    const objectExemplare = Board();
    expect(objectExemplare).to.be.a('object');
  });

  describe('Board object', () => {
    let boardObject;
    beforeEach(() => {
      boardObject = Board();
    });

    it('Every row in board must be 3 length', () => {
      const boardArray = boardObject.getBoard();
      const len = 3;
      const AllElementsHas3length = boardArray.every((el) => el.length == len);
      expect(AllElementsHas3length).to.equals(true);
    });

    it('Board must has 3 row', () => {
      const boardArray = boardObject.getBoard();
      const len = 3;
      expect(boardArray.length).to.equals(len);
    });
  });
});
