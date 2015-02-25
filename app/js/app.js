/*global angular, browser */

(function () { 'use strict';

    // Declare app level module and dependencies
    angular.module('App', [
        'ngRoute',
        'ngAnimate',
        'controllersModule',
        'directivesModule',
        'servicesModule'
    ]).
    config(['$routeProvider', 
      function ($routeProvider) {
        $routeProvider.
        when('/', {
          templateUrl: 'ui/partials/main-view.html',
          controller: 'mainController'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
             }()
);