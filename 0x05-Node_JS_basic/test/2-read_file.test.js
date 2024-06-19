/* eslint-disable jest/no-hooks */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
const { ShouldThrow, expect } = require('chai');
const sinon = require('sinon');

const countStudents = require('../2-read_file');

describe('countStudents', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs to the console the right messages', () => {
    countStudents('./database.csv');

    expect(consoleSpy.calledWith('Number of students: 10')).to.be.true;
    expect(
      consoleSpy.calledWith(
        'Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie'
      )
    ).to.be.true;
    expect(
      consoleSpy.calledWith(
        'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy'
      )
    ).to.be.true;
  });
});
