'use strict';

describe('Directive: tapHeader', function () {

  // load the directive's module
  beforeEach(module('tapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tap-header></tap-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tapHeader directive');
  }));
});
