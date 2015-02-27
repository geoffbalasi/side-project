'use strict';

/* Card Controller */

angular.module('controllersModule').controller('cardController', ['$scope', function($scope) {

    $scope.open = (typeof $scope.card !== 'undefined') ? $scope.card.open : false;

    // open or close the card
    $scope.changeSize = function() {
        if($scope.open === false)
        {
            $scope.open = true;
        }
        else {
            $scope.open = false;
        }
        setTimeout(function(){
            $scope.$emit('repositionCards');
        }, 1);
    };
}]);