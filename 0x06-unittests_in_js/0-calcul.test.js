/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculates number', function () {
  it('expects 1 + 3 = 4', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('expects 1 + 3.7 = 5', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('expects 1.2 + 3.7 = 5', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('expects 1.5 + 3.7 = 6', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('expects -2 + 4 = 2', function () {
    assert.equal(calculateNumber(-2, -4), -6);
  });
});
