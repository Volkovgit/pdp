const { expect } = require('chai');
const inputer = require('../../src/inputer');
const coordinatesInput = require('../../src/tickTacToe/coordinatesInput');

describe('coordinatesInput', () => {
  let inputCoorinates;
  let stdin;
  beforeEach(() => {
    inputCoorinates = new inputer(new coordinatesInput());
    stdin = require('mock-stdin').stdin();
  });
  it('Should return array from input two numbers', async () => {
    const arrayFromInputNumbers = [1,1]
    process.nextTick(() => {
      stdin.send('21\r');
    });
    const result = await inputCoorinates.input('Введите координаты','Введены некорректные данные. Введите 2 числа от 1 до 3',1,/[123]\s{0,}[123]/)
    expect(result).to.deep.equal(arrayFromInputNumbers);
  });

  it('Empty test',  () => {

  });
});
