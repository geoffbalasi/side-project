'use strict';

/* Card Controller */

angular.module('controllersModule').controller('cardController', ['$scope', function($scope) {

    $scope.open = (typeof $scope.card !== 'undefined') ? $scope.card.open : false;

    $scope.changeSize = function() {
        if($scope.open === false)
        {
            $scope.open = true;
            $scope.relocateCards();
        }
        else {
            $scope.open = false;
            $scope.relocateCards();
        }
    };
}]);