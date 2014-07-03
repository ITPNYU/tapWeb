'use strict';

/**
 * @ngdoc function
 * @name tapApp.controller:ProviderCtrl
 * @description
 * # ProviderCtrl
 * Controller of the tapApp
 */
angular.module('tapApp')
.controller('ProviderCtrl', ['$scope', 'Provider', '$http', 'CONFIG',
  function ($scope, Provider, $http, CONFIG) {
    $scope.getProviders = function() {
      $scope.providers = Provider.queryRaw(function(data) {
        $scope.providers = data.objects;
        if (data.total_pages > 1) {
          for (var i = 2; i <= data.total_pages; i++) {
            var pageData = $http.get(CONFIG.baseURL + 'provider', {params: {'page': i}})
              .success(function(pageData) {
                $scope.providers = $scope.providers.concat(pageData.objects);
              });
          }
        }
      });
      return $scope.providers;
    };
    
    $scope.providers = $scope.getProviders();
  }
]);
