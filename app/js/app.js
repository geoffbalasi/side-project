/*global angular, browser */

(function () { 'use strict';

    // Declare app level module which depends on views, and components
    angular.module('SeerApp', [
        'ngRoute',
        'seerControllers'
    ]).
    config(['$routeProvider', 
      function ($routeProvider) {
        $routeProvider.
        when('/', {
          templateUrl: 'partials/main-view.html',
          controller: 'CardListCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
             }()
);