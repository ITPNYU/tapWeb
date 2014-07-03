'use strict';

/**
 * @ngdoc service
 * @name tapApp.Session
 * @description
 * # Session
 * Factory in the tapApp.
 */
angular.module('tapApp')
  .factory('Session', ['$http', 
    function($http) {
      return {
        'session': function() {
          return;
        }
      };
    }
  ]);
