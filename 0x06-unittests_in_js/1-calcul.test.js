/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('expects 1 + 3 = 4', function () {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('expects 1.4 + 4.5 = -4', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('expects 1.4 / 4.5 = 0.2', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('expects Error', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
