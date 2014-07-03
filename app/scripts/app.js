'use strict';

angular
  .module('tapApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/opportunities.html',
        controller: 'OpportunityCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'SessionCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'SessionCtrl'
      })
      .when('/opportunities', {
        templateUrl: 'views/opportunities.html',
        controller: 'OpportunityCtrl'
      })
      .when('/providers', {
        templateUrl: 'views/providers.html',
        controller: 'ProviderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
