'use strict';

describe('Service: Opportunity', function () {

  // load the service's module
  beforeEach(module('tapApp'));

  // instantiate service
  var Opportunity;
  beforeEach(inject(function (_Opportunity_) {
    Opportunity = _Opportunity_;
  }));

  it('should do something', function () {
    expect(!!Opportunity).toBe(true);
  });

});
