'use strict';

/**
 * @ngdoc directive
 * @name tapApp.directive:opportunitySave
 * @description
 * # opportunitySave
 */
angular.module('tapApp')
.directive('opportunitySave', ['Opportunity',
  function (Opportunity) {
    return {
      templateUrl: 'views/opportunitysave.html',
      restrict: 'EA',
      replace: true,
      link: function($scope, element) {
        element.on('click', function() {
          Opportunity.save($scope.opportunity, function() {
            $scope.opportunities = $scope.getOpportunities();
          });
        });
      }
    };
  }
]);
