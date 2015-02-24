'use strict';

describe('Filter: unsafe', function () {

  // load the filter's module
  beforeEach(module('blogApp'));

  // initialize a new instance of the filter before each test
  var unsafe;
  beforeEach(inject(function ($filter) {
    unsafe = $filter('unsafe');
  }));

  it('should return the function that unwraps html', function () {
    expect(unsafe('')).not.toBe(undefined);
  });

});
