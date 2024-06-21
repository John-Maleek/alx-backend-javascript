/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/lowercase-name */
const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('testing...', (done) => {
    request('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
