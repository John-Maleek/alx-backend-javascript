const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculates number', () => {
  it('expects 1 + 3 = 4', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('expects -1 + -3 = -4', function () {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });
  it('expects 1.4 + 4.5 = -4', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('expects -4 + 4.5 = 1', function () {
    expect(calculateNumber('SUBTRACT', -4, 4.5)).to.equal(-9);
  });
  it('expects 1.4 / 4.5 = 0.2', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('expects -120 / 4 = -30', function () {
    expect(calculateNumber('DIVIDE', -120, 4)).to.equal(-30);
  });
  it('expects Error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
