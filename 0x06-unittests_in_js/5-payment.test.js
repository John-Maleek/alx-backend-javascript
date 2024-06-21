/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable jest/no-hooks */
/* eslint-disable jest/lowercase-name */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumber, consoleLogSpy;

  beforeEach(() => {
    calculateNumber = sinon.spy(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumber.restore();
    consoleLogSpy.restore();
  });

  it('Task 5 First Testing...', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('Task 5 Seconde Testing...', () => {
    sendPaymentRequestToApi(10, 10);
    expect(calculateNumber.calledWithExactly('SUM', 10, 10)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
