const { expect } = require('chai');
const consoleInput = require('../src/consoleInput');
const inputer = require('../src/inputer');

describe('consoleInput', () => {
  let inputFromConsole;
  let stdin;
  beforeEach(() => {
    inputFromConsole = new inputer(new consoleInput());
    stdin = require('mock-stdin').stdin();
  });
  it('Should return string from input ', async () => {
    const stringInput = 'test1234blablabla';
    process.nextTick(() => {
      stdin.send(stringInput + '\r');
    });
    inputFromConsole.input('Enter string', function (answer) {
      expect(answer).to.be.equal(stringInput);
    });
  });
});
