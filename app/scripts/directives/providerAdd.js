'use strict';

/**
 * @ngdoc directive
 * @name tapApp.directive:providerAdd
 * @description
 * # providerAdd
 */
angular.module('tapApp')
.directive('providerAdd', [
  function () {
    return {
      templateUrl: 'views/provideradd.html',
      restrict: 'EA'
    };
  }
]);
