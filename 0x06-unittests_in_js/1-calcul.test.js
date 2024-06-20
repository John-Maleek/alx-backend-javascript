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
  it('expects -1 + -3 = -4', function () {
    assert.equal(calculateNumber('SUM', -1, -3), -4);
  });
  it('expects 1.4 + 4.5 = -4', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('expects -4 + 4.5 = 1', function () {
    assert.equal(calculateNumber('SUBTRACT', -4, 4.5), -9);
  });
  it('expects 1.4 / 4.5 = 0.2', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('expects -120 / 4 = -30', function () {
    assert.equal(calculateNumber('DIVIDE', -120, 4), -30);
  });
  it('expects Error', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
