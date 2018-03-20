/* eslint-disable no-undef */
const question2 = require('../../app/question2');
const { assert } = require('chai');

describe('shouldReturn1_2IsGreaterThan1_1', () => {
  it('should return 1.2 is greater than 1.1', (done) => {
    assert.equal(question2.compareVersion('1.2', '1.1'), 1);
    done();
  });
});

