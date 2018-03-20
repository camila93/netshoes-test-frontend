/* eslint-disable no-undef */
const question2 = require('../../app/question2');
const { assert } = require('chai');

describe('version 2 unit tests', () => {
  it('should return 1.2 is greater than 1.1', (done) => {
    assert.equal(question2.compareVersion('1.2', '1.1'), 1);
    done();
  });

  it('should return 1.2 is less than 1.3', (done) => {
    assert.equal(question2.compareVersion('1.2', '1.3'), -1);
    done();
  });

  it('should return 1.1 equals', (done) => {
    assert.equal(question2.compareVersion('1.1', '1.1'), 0);
    done();
  });

  it('should return 1.1.1.2.3.4.5 equals', (done) => {
    assert.equal(question2.compareVersion('1.1.1.2.3.4.5', '1.1.1.2.3.4.5'), 0);
    done();
  });

  it('should return 2.10.115.2.3 equals', (done) => {
    assert.equal(question2.compareVersion('2.10.115.2.3', '2.10.115.2.3'), 0);
    done();
  });

  it('should return 1.1.1 is greater than 1.1', (done) => {
    assert.equal(question2.compareVersion('1.1.1', '1.1'), 1);
    done();
  });

  it('should return 10.1.20.10.2.3.4 is greater than 10.1.20.10.2.3.2', (done) => {
    assert.equal(question2.compareVersion('10.1.20.10.2.3.4', '10.1.20.10.2.3.2'), 1);
    done();
  });

  it('should return 10.1.20.50.2.3.4 is greater than 10.1.20.10.2.3.4', (done) => {
    assert.equal(question2.compareVersion('10.1.20.50.2.3.4', '10.1.20.10.2.3.4'), 1);
    done();
  });

  it('should return 1.1.1.1.2.3.4 is greater than 1.1.1.1.2.3.2', (done) => {
    assert.equal(question2.compareVersion('1.1.1.1.2.3.4', '1.1.1.1.2.3.2'), 1);
    done();
  });

  it('should return 1.0 is equals to 1', (done) => {
    assert.equal(question2.compareVersion('1.0', '1'), 0);
    done();
  });


  it('should return 5 is equals to 5.0.0.0.0', (done) => {
    assert.equal(question2.compareVersion('5', '5.0.0.0.0'), 0);
    done();
  });


  it('should return 1.2 is less than 2.1', (done) => {
    assert.equal(question2.compareVersion('1.2', '2.1'), -1);
    done();
  });

  it('should return 0.1.2.2470.2 is less than 1.2.1', (done) => {
    assert.equal(question2.compareVersion('0.1.2.2470.2', '1.2.1'), -1);
    done();
  });

  it('should return 0.1.2.2470.2 is greater than 0.0.1.1.1', (done) => {
    assert.equal(question2.compareVersion('0.1.2.2470.2', '0.0.1.1.1'), 1);
    done();
  });

  it('should return 0.1.2.2470.0.0.2 is greater than 0.0.1.1.1', (done) => {
    assert.equal(question2.compareVersion('0.1.2.2470.0.0.2', '0.0.1.1.1'), 1);
    done();
  });

  it('should return 0.0.0.0.01.2.2470.0.0.2 is greater than 0.0.0.0.1.1.1', (done) => {
    assert.equal(question2.compareVersion('0.0.0.0.01.2.2470.0.0.2', '0.0.0.0.1.1.1'), 1);
    done();
  });

  it('should return 00.0.0.00.010.2.2470.0.00.2 equals', (done) => {
    assert.equal(question2.compareVersion('00.0.0.00.010.2.2470.0.00.2', '0.00.0.00.10.2.2470.00.0.2'), 0);
    done();
  });


});

