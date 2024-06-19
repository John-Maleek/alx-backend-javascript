/* eslint-disable jest/no-hooks */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';
const app = require('../5-http');

chai.use(chaiHttp);
chai.should();

describe('More complex HTTP server using node', () => {
  describe('/students endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });
      it('Returns the right content', (done) => {
        chai
          .request(app)
          .get('/students')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.have
              .string(`This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`);
            done();
          });
      });
    });
  });
});
