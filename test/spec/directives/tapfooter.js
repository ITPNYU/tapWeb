'use strict';

describe('Directive: tapFooter', function () {

  // load the directive's module
  beforeEach(module('tapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tap-footer></tap-footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tapFooter directive');
  }));
});
