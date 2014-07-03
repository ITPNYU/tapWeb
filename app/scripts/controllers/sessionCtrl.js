'use strict';

/**
 * @ngdoc function
 * @name tapApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tapApp
 */
angular.module('tapApp')
  .controller('SessionCtrl', ['$scope', 'Authn',
    function ($scope, Authn) {
      $scope.credentials = { username: null, password: null};

      $scope.login = function (credentials) {
        Authn.login(credentials)
          .then(function () {
            return; // FIXME: implement
          });
      };
    }
  ]);
