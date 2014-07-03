'use strict';

/**
 * @ngdoc directive
 * @name tapApp.directive:opportunityAdd
 * @description
 * # opportunityAdd
 */
angular.module('tapApp')
.directive('opportunityAdd', [
  function () {
    return {
      templateUrl: 'views/opportunityadd.html',
      restrict: 'EA'
    };
  }
]);