'use strict';

describe('isMorning', function() {

  var isMorning;
  beforeEach(function() {
    isMorning = require('../lib/isMorning');
  });

  it('returns true in the morning', function() {
    expect(isMorning(10)).toEqual(true);
  });

  it('returns false in the afternoon and night', function() {
    expect(isMorning(22)).toEqual(false);
    expect(isMorning(14)).toEqual(false);
  });
});
