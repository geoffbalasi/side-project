'use strict';

/* Card List Controllers */

angular.module('controllersModule',[]).controller('mainController', ['$scope', 'CardService', '$window', function($scope, CardService, $window) {
    $scope.cards = CardService.query();
    $scope.name = 'Side Project';
    $scope.relocate = true;
    $scope.load = true;

    $scope.relocateCards = function() {
        $scope.relocate = !$scope.relocate;
    };

    $scope.addCards = function() {
        var additionalCards = $scope.cards.slice(0,20);
        $scope.cards = $scope.cards.concat(additionalCards);
        $scope.load = !$scope.load;
        console.log("add cards");
        $scope.$digest();
    };

}]);