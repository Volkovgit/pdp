const ticTacToe = require("../../src/tickTacToe/ticTackToe");
const { expect } = require('chai');

const newTickTack = new ticTacToe()
describe('ticTacToe',() => {
    it('Should create exemplar of ticTacToe class',() => {
        expect(new ticTacToe() instanceof ticTacToe).to.be.equals(true)
    })
    describe('Check core method',() => {
        console.log( new ticTacToe());
    })
})