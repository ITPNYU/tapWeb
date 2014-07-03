'use strict';

/**
 * @ngdoc service
 * @name tapApp.Provider
 * @description
 * # Provider
 * Factory in the tapApp.
 */
angular.module('tapApp')
  .factory('Provider', ['$resource', 'CONFIG',
    function ($resource, CONFIG) {
      return $resource(CONFIG.baseURL + 'provider/:id',
        {'key': CONFIG.key, 'id': '@id'},
        {'query':
          {'method': 'GET',
            'transformResponse': function (data) {
              return JSON.parse(data).objects;
            },
            'isArray': true
          },
          // queryRaw is like query but doesn't transform the results
          'queryRaw': {'method': 'GET'}
        }
      );
    }
  ]);
