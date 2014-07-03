'use strict';

describe('Controller: OpportunityCtrl', function () {

  // load the controller's module
  beforeEach(module('tapApp'));

  var OpportunityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpportunityctrlCtrl = $controller('OpportunityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
