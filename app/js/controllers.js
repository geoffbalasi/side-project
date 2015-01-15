'use strict';

/* Controllers */

var seerControllers = angular.module('seerControllers', []);

seerControllers.controller('CardListCtrl', ['$scope', '$http', 
  function($scope, $http) {
    $http.get('cards.json').success(function(data) {
        $scope.cards = data;
    });
  
    $scope.name = 'Seer';
  }
]);

seerControllers.controller('CardCtrl', ['$scope',
  function($scope) {
    $scope.size = 'closed';
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