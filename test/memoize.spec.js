const { expect } = require('chai');
const memoize = require('../src/memoize');
const sinon = require('sinon');

describe('Memoize', function () {
  it('Should be a function', () => {
    expect(memoize).to.be.a('function');
  });

  it('Should return undefined if no function provided', () => {
    [undefined, 123, '123', [], {}].forEach((param) => {
      expect(memoize(param)).to.be.a('undefined');
    });
  });

  it('Should return function if function provided', () => {
    const functionResult = memoize(Array.prototype.forEach);
    const expectedResult = 'function';
    expect(functionResult).to.be.a(expectedResult);
  });

  describe('Cashed function', () => {
    /**
     * Функция возращает число увеличенное на 10
     * @return {number}
     * @param {number} x
     */
    function addTen(x) {
      return x + 10;
    }

    /**
     * Считает сумму переданных элементов
     * @return {any}
     * @param {any} args
     */
    function summElements(...args) {
      const result = args.reduce((sum, el) => sum + el);
      return result;
    }

    /**
     * Приветствие пользователя с получением имени из контекста
     * @return {string}
     */
    function welcomeUserFromContext() {
      return this.hi();
    }

    let addTenSpy;
    let memoizedSummElements;
    let memoizedAddTen;
    let summElementsSpy;
    let spyWelcomeUserFromContext;
    let memoizedWelcomeUserFromContext;

    beforeEach(() => {
      addTenSpy = sinon.spy(addTen);
      memoizedAddTen = memoize(addTenSpy);
      summElementsSpy = sinon.spy(summElements);
      memoizedSummElements = memoize(summElementsSpy);
      spyWelcomeUserFromContext = sinon.spy(welcomeUserFromContext);
      memoizedWelcomeUserFromContext = memoize(spyWelcomeUserFromContext);
    });

    it('Is not equal to the original function', () => {
      expect(memoize(addTen)).to.be.a('function').and.to.not.equal(addTen);
      expect(memoize(summElements)).to.be.a('function').and.to.not.equal(summElements);
    });

    it('Returns correct values in case of the consequent calls with identical arguments', () => {
      expect(memoizedAddTen(7)).to.equal(17); // #1
      expect(memoizedAddTen(3)).to.equal(13); // #2
      expect(memoizedAddTen(3)).to.equal(13); // #2
      expect(memoizedAddTen(4)).to.equal(14); // #3
      expect(memoizedAddTen(4)).to.equal(14); // #3
      expect(memoizedAddTen(3)).to.equal(13); // #2
      expect(memoizedAddTen(4)).to.equal(14); // #3
      expect(memoizedAddTen(7)).to.equal(17); // #1
      sinon.assert.callCount(addTenSpy, 3);
    });

    it('Function called once', () => {
      expect(memoizedAddTen(7)).to.equal(17); // #1
      expect(memoizedAddTen(7)).to.equal(17); // #1
      expect(memoizedAddTen(7)).to.equal(17); // #1
      sinon.assert.calledOnce(addTenSpy);
    });

    it('Return correct value from function with many arguments', () => {
      expect(memoizedSummElements(1, 2, 3, 4, 5)).to.equal(15);
      sinon.assert.calledOnce(summElementsSpy);
    });

    it('Function with identical arguments called once and return one value', () => {
      expect(memoizedSummElements(1, 2, 3, 4, 5)).to.equal(15);
      expect(memoizedSummElements(1, 2, 3, 4, 5)).to.equal(15);
      expect(memoizedSummElements(1, 2, 3, 4, 5)).to.equal(15);
      expect(memoizedSummElements(1, 2, 3, 4, 5)).to.equal(15);
      sinon.assert.calledOnce(summElementsSpy);
    });

    it('Caches results of the consequent calls with identical arguments', () => {
      expect(memoizedAddTen(1)).to.equal(11); // #1
      sinon.assert.calledWith(addTenSpy, 1);
      sinon.assert.calledOnce(addTenSpy);
      addTenSpy.resetHistory();
      expect(memoizedAddTen(1)).to.equal(11); // #2
      sinon.assert.notCalled(addTenSpy);
    });

    it('Should return value from this', () => {
      const referenceObject = {
        name: 'John',
        hi() {
          return 'Hi ' + this.name;
        },
      };
      expect(memoizedWelcomeUserFromContext(referenceObject)).to.equal('Hi John');
      expect(memoizedWelcomeUserFromContext(referenceObject)).to.equal('Hi John');
      sinon.assert.calledOnce(spyWelcomeUserFromContext);
    });
  });
});
