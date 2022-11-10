/* eslint-disable space-before-function-paren */
const { expect } = require('chai');
const memoize = require('../src/memoize');
const sinon = require('sinon');

describe('Memoize', function () {
  it('Should be a function', () => {
    expect(memoize).to.be.a('function');
  });

  it('Should return null if no function provided', () => {
    [undefined, 123, '123', [], {}].forEach((param) => {
      expect(memoize(param)).to.be.a('null');
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

    // eslint-disable-next-line require-jsdoc
    function grep(pattern, ...items) {
      if (!(pattern instanceof RegExp)) {
        return null;
      }
      return items.map(String).filter((item) => pattern.test(item));
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
    let grepSpy;
    let memoizedGrep;

    beforeEach(() => {
      addTenSpy = sinon.spy(addTen);
      memoizedAddTen = memoize(addTenSpy);
      summElementsSpy = sinon.spy(summElements);
      memoizedSummElements = memoize(summElementsSpy);
      spyWelcomeUserFromContext = sinon.spy(welcomeUserFromContext);
      memoizedWelcomeUserFromContext = memoize(spyWelcomeUserFromContext);
      grepSpy = sinon.spy(grep);
      memoizedGrep = memoize(grepSpy);
    });

    it('Is not equal to the original function', () => {
      expect(memoize(addTen)).to.be.a('function').and.to.not.equal(addTen);
      expect(memoize(summElements)).to.be.a('function').and.to.not.equal(summElements);
      // eslint-disable-next-line max-len, prettier/prettier
      expect(memoize(welcomeUserFromContext))
        .to.be.a('function')
        .and.to.not.equal(welcomeUserFromContext);
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
      expect(memoizedSummElements(1, 3, 4, 5, 6)).to.equal(19);
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
      referenceObject.name = 'Bob';
      expect(memoizedWelcomeUserFromContext(referenceObject)).to.equal('Hi Bob');
      expect(memoizedWelcomeUserFromContext(referenceObject)).to.equal('Hi Bob');
      sinon.assert.callCount(spyWelcomeUserFromContext, 2);
    });

    it('uses all arguments to compute cache key', () => {
      const N = 10;
      for (let n = 1; n <= N; n += 1) {
        const args = range(n);
        memoizedSummElements(...args);
        sinon.assert.calledWith(summElementsSpy, ...args);
        sinon.assert.callCount(summElementsSpy, n);
      }
      summElementsSpy.resetHistory();
      for (let n = 1; n <= N; n += 1) {
        memoizedSummElements(...range(n));
      }
      sinon.assert.notCalled(summElementsSpy);

      // eslint-disable-next-line require-jsdoc
      function range(n) {
        return n > 0 ? [n, ...range(n - 1)] : [];
      }
    });

    it('uses complicated enough key generator to distinguish different types', () => {
      const args1 = [/\d+/, '1', 2, true];
      expect(memoizedGrep(...args1)).to.deep.equal(['1', '2']); // #1
      sinon.assert.calledWith(grepSpy, ...args1);
      sinon.assert.calledOnce(grepSpy);
      const args2 = [/\d+/, 1, '2', true];
      expect(memoizedGrep(...args2)).to.deep.equal(['1', '2']); // #2
      sinon.assert.calledWith(grepSpy, ...args2);
      sinon.assert.calledTwice(grepSpy);
      grepSpy.resetHistory();
      expect(memoizedGrep(...args2)).to.deep.equal(['1', '2']); // #2
      sinon.assert.notCalled(grepSpy);
    });

    it('uses complicated enough key generator to preserve argument order', () => {
      expect(memoizedSummElements(4, 3)).to.equal(7); // #1
      sinon.assert.calledWith(summElementsSpy, 4, 3);
      sinon.assert.calledOnce(summElementsSpy);
      expect(memoizedSummElements(3, 4)).to.equal(7); // #2
      sinon.assert.calledWith(summElementsSpy, 3, 4);
      sinon.assert.calledTwice(summElementsSpy);
      summElementsSpy.resetHistory();
      expect(memoizedSummElements(3, 4)).to.equal(7); // #2
      sinon.assert.notCalled(summElementsSpy);
    });
  });
});
