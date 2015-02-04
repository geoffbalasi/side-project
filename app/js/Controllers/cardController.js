'use strict';

/* Card Controller */

angular.module('SeerApp.controllers').controller('cardController', ['$scope', function($scope) {

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
}]);