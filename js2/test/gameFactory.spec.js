const gameFactory = require('../src/gameFactory');
const { expect } = require('chai');
const gameEnum = require('../src/gamesEnum');
const ticTacToe = require('../src/tickTacToe/ticTackToe');

describe('gameFactory', () => {
    it('Should return null if we dont provide gameType',() => {
        expect(gameFactory()).to.be.equal(null)
    })
    it('Should return ticTackGame if we provide ticTackGame type',() => {
        expect(gameFactory(gameEnum.TicTackToe) instanceof ticTacToe).to.be.equal(true)
    })
});
