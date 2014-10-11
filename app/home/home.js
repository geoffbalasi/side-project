'use strict';

angular.module('myApp.home.controllers', []);

angular.module('myApp.home', ['ngRoute', 'myApp.home.controllers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/templates/home.html',
    controller: 'homeController'
  });
}])

// controller for home page
.controller('homeController', ['$scope', function($scope) {
  		$scope.greeting = 'Hola!';
  		alert($scope.greeting);
}]);
