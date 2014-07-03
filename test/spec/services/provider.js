'use strict';

describe('Service: Provider', function () {

  // load the service's module
  beforeEach(module('tapApp'));

  // instantiate service
  var Provider;
  beforeEach(inject(function (_Provider_) {
    Provider = _Provider_;
  }));

  it('should do something', function () {
    expect(!!Provider).toBe(true);
  });

});
