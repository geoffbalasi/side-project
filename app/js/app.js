/*global angular, browser */

(function () { 'use strict';

    // Declare app level module and dependencies
    angular.module('SeerApp', [
        'ngRoute',
        'ngAnimate',
        'seerControllers',
        'seerServices'
    ]).
    config(['$routeProvider', 
      function ($routeProvider) {
        $routeProvider.
        when('/', {
          templateUrl: 'ui/partials/main-view.html',
          controller: 'CardListCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
             }()
);