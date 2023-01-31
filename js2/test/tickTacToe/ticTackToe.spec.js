const ticTacToe = require('../../src/tickTacToe/ticTackToe');
const { expect, assert } = require('chai');
const sinon = require('sinon');

describe('ticTacToe', () => {
  it('Should create exemplar of ticTacToe class', () => {
    expect(new ticTacToe() instanceof ticTacToe).to.be.equals(true);
  });
  describe('Check core methods', () => {
    let ticTacToeGame;
    beforeEach(() => {
      ticTacToeGame = new ticTacToe();
    });

    it('Print different text with board', () => {
      const consoleLogSpy = sinon.spy(console, 'log');
      const stringClearBoard = ticTacToeGame.boardObj.boardToString()
      ticTacToeGame.printTextAndBoard('board1');
      ticTacToeGame.printTextAndBoard('board2');
      ticTacToeGame.printTextAndBoard('');
      assert(consoleLogSpy.calledWith(stringClearBoard));
      assert(consoleLogSpy.calledWith('board1'));
      assert(consoleLogSpy.calledWith('board2'));
      assert(consoleLogSpy.calledWith(''));
    });

    it('Return true if string pass regexp',() => {
      const regexpOnlyOneNumber = /^\d$/
      const regexpOnlyLatinCharacters =  /[a-z]{0,}/
      const oneonlyNumbers = '1'
      const tenNumbers='1234567890'
      const onlyLatinCharacter = 'abcdefg'
      assert(ticTacToeGame.checkInputStringByRegexp(regexpOnlyOneNumber,oneonlyNumbers));
      assert(ticTacToeGame.checkInputStringByRegexp(regexpOnlyLatinCharacters,onlyLatinCharacter));
      assert(ticTacToeGame.checkInputStringByRegexp(regexpOnlyOneNumber,tenNumbers)===false);
    })

    it('Should return array of numbers from string',() => {
      const stringNumbers ='1234567890'
      const arrayOfStringNumbers = [1,2,3,4,5,6,7,8,9,0]
      expect(ticTacToeGame.normalizeInputBoardCoordinate(stringNumbers)).to.be.an('array')
      expect(ticTacToeGame.normalizeInputBoardCoordinate(stringNumbers)).to.deep.equal(arrayOfStringNumbers)
    })

  });
});
