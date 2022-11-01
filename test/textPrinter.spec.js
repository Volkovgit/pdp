const Printer = require('../src/tic-tac/printer')
const { expect } = require('chai');

describe('TextPrinter',() => {
    it('Should be a function',() => {
        expect(Printer).to.be.a('function')
    })
    it('Should return Object',() => {
        const objectExemplare = Printer()
        expect(objectExemplare).to.be.a('object')
    })
    describe('Should print text from input',() => {
        
    })
})

