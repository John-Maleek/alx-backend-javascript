/* eslint-disable jest/no-identical-title */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/lowercase-name */
const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('Index Page Testing...', (done) => {
    request('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Cart Page Testing...', (done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Cart Page Testing...', (done) => {
    request('http://localhost:7865/cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
