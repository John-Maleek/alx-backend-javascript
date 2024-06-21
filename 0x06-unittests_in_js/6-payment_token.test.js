/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-test-callback */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('sendPaymentRequestToApi', () => {
  it('testing...', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({
        data: 'Successful response from the API',
      });
      done();
    });
  });
});
