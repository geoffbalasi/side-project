'use strict';

/* Controllers */

var seerControllers = angular.module('seerControllers', []);

seerControllers.controller('CardListCtrl', ['$scope', 'CardService', 
  function($scope, CardService) {
    $scope.cards = CardService.query();
    $scope.name = 'Seer';
  }
]);

seerControllers.controller('CardCtrl', ['$scope',
  function($scope) {
    $scope.size = (typeof $scope.card !== 'undefined') ? $scope.card.size : 'closed';
    $scope.changeSize = function() {
      if($scope.size === 'closed')
      {
        $scope.size = 'open';
      }
      else {
        $scope.size = 'closed';
      }
    };
  }  
]);