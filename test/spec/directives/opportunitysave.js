'use strict';

describe('Directive: opportunitySave', function () {

  // load the directive's module
  beforeEach(module('tapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<opportunity-save></opportunity-save>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the opportunitySave directive');
  }));
});
