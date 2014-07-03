'use strict';

/**
 * @ngdoc directive
 * @name tapApp.directive:tapHeader
 * @description
 * # tapHeader
 */
angular.module('tapApp')
.directive('tapHeader', function () {
  return {
    templateUrl: 'views/tapheader.html',
    restrict: 'A'
  };
});
