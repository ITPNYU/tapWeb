'use strict';

describe('Directive: providerAdd', function () {

  // load the directive's module
  beforeEach(module('tapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<provider-add></provider-add>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the providerAdd directive');
  }));
});
