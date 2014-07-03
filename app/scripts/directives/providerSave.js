'use strict';

/**
 * @ngdoc directive
 * @name tapApp.directive:providerSave
 * @description
 * # providerSave
 */
angular.module('tapApp')
.directive('providerSave', ['Provider',
  function (Provider) {
    return {
      templateUrl: 'views/providersave.html',
      restrict: 'EA',
      replace: true,
      link: function($scope, element) {
        element.on('click', function() {
          Provider.save($scope.provider, function() {
            $scope.providers = $scope.getProviders();
          });
        });
      }
    };
  }
]);
