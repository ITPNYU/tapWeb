'use strict';

describe('Service: Authn', function () {

  // load the service's module
  beforeEach(module('tapApp'));

  // instantiate service
  var Authn;
  beforeEach(inject(function (_Authn_) {
    Authn = _Authn_;
  }));

  it('should do something', function () {
    expect(!!Authn).toBe(true);
  });

});
