'use strict';

/**
 * @ngdoc service
 * @name tapApp.Authn
 * @description
 * # Authn
 * Factory in the tapApp.
 */
angular.module('tapApp')
  .factory('Authn', ['$http', 'Session', 'CONFIG',
    function($http, Session, CONFIG) {
      return {
        'login': function(credentials) {
          return $http.post(CONFIG.baseURL + 'session', credentials)
            .then(function(data) {
              console.dir(data);
            });
        }
      };
    }
  ]);
