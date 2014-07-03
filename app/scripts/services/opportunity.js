'use strict';

angular.module('tapApp')
  .factory('Opportunity', ['$resource', 'CONFIG',
    function ($resource, CONFIG) {
      return $resource(CONFIG.baseURL + 'opportunity/:id',
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
