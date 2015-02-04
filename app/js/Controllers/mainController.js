'use strict';

/* Card List Controllers */

angular.module('SeerApp.controllers',[]).controller('mainController', ['$scope', 'CardService', function($scope, CardService) {
    $scope.cards = CardService.query();
    $scope.name = 'Seer';
}]);