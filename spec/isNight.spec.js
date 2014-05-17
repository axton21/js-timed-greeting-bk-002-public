'use strict';

describe('isNight', function() {

  var isNight;
  beforeEach(function() {
    isNight = require('../lib/isNight');
  });

  it('returns true during the night', function() {
    expect(isNight(22)).toEqual(true);
  });

  it('returns false during the morning and afternoon', function() {
    expect(isNight(8)).toEqual(false);
    expect(isNight(14)).toEqual(false);
  });

});
