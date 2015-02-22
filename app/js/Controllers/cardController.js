'use strict';

/* Card Controller */

angular.module('SeerApp.controllers').controller('cardController', ['$scope', function($scope) {

    $scope.open = (typeof $scope.card !== 'undefined') ? $scope.card.open : false;

    $scope.changeSize = function() {
        if($scope.open === false)
        {
            $scope.open = true;
        }
        else {
            $scope.open = false;
        }
    };
}]);