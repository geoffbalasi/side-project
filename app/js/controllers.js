'use strict';

/* Controllers */

var seerControllers = angular.module('seerControllers', []);

seerControllers.controller('CardListCtrl', ['$scope', '$http', 
  function($scope, $http) {
    $http.get('cards.json').success(function(data) {
        $scope.cards = data;
    });
  
  $scope.name = 'Seer';
}]);