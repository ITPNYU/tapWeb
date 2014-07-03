'use strict';

/**
 * @ngdoc function
 * @name tapApp.controller:OpportunityCtrl
 * @description
 * # OpportunityCtrl
 * Controller of the tapApp
 */
angular.module('tapApp')
  .controller('OpportunityCtrl', ['$scope', 'Opportunity', '$http', 'CONFIG',
    function ($scope, Opportunity, $http, CONFIG) {
      $scope.getOpportunities = function() {
        $scope.opportunities = Opportunity.queryRaw(function(data) {
          $scope.opportunities = data.objects;
          if (data.total_pages > 1) {
            for (var i = 2; i <= data.total_pages; i++) {
              var pageData = $http.get(CONFIG.baseURL + 'opportunity', {params: {'page': i}})
                .success(function(pageData) {
                  $scope.opportunities = $scope.opportunities.concat(pageData.objects);
                });
            }
          }
        });
        return $scope.opportunities;
      };
      
      $scope.opportunities = $scope.getOpportunities();
    }
  ]);
