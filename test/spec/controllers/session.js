'use strict';

describe('Controller: SessionCtrl', function () {

  // load the controller's module
  beforeEach(module('tapApp'));

  var SessionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionCtrl = $controller('SessionCtrl', {
      $scope: scope
    });
  }));

});
