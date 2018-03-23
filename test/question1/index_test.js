/* eslint-disable no-undef */
const question1 = require('../../app/question1');
const { assert } = require('chai');

describe('version 1 unit tests', () => {
  it('should return as output', (done) => {
    assert.equal(question1.firstChar('aAbBABacafe'), 'e');
    done();
  });

  it('should return min value of character', (done) => {
    assert.equal(question1.firstChar('aAbBABacafeTE'), 'e');
    done();
  });

  it('should return zero character for single vowel stream', (done) => {
    assert.equal(question1.firstChar('a'), '0');
    done();
  });

  it('should return zero character for single consonant stream', (done) => {
    assert.equal(question1.firstChar('c'), '0');
    done();
  });

  it('should return zero character for single consonant and single vowel', (done) => {
    assert.equal(question1.firstChar('ac'), '0');
    done();
  });

  it('should return zero', (done) => {
    assert.equal(question1.firstChar('xafeAbBABcfIeKI'), '0');
    done();
  });

  it('should return e', (done) => {
    assert.equal(question1.firstChar('aAbBABacafesi'), 'e');
    done();
  });

  it('should return e for this stream', (done) => {
    assert.equal(question1.firstChar('aAbBABacafesa'), 'e');
    done();
  });

  it('should return i', (done) => {
    assert.equal(question1.firstChar('afeaAbBABacafIe'), 'I');
    done();
  });

  it('should return i when stream contains special characters', (done) => {
    assert.equal(question1.firstChar('afe)aAb!BA&Ba(cafIe'), 'I');
    done();
  });

  it('should return i when stream contains duplicated vowel', (done) => {
    assert.equal(question1.firstChar('ifAgahA'), 'a');
    done();
  });

  it('should return i when stream contains upper and lower vowel', (done) => {
    assert.equal(question1.firstChar('ifagAha'), 'A');
    done();
  });

  it('should return error when empty stream', (done) => {
    assert.throws(() => { question1.firstChar(''); }, Error, 'Invalid stream');
    done();
  });

  it('should return error when stream filled with empty spaces', (done) => {
    assert.throws(() => { question1.firstChar('  '); }, Error, 'Invalid stream');
    done();
  });

  it('should return error when stream filled with no content', (done) => {
    assert.throws(() => { question1.firstChar(); }, Error, 'Invalid stream');
    done();
  });
});

