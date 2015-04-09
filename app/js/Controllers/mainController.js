'use strict';

/* Card List Controllers */

angular.module('controllersModule',[]).controller('mainController', ['$scope', 'CardService', '$window', function($scope, CardService, $window) {
    $scope.cards = CardService.query();
    $scope.name = 'AlwaysNext';

    // add additional cards
    $scope.addCards = function() {
        var additionalCards = $scope.cards.slice(0, 40);
        $scope.cards = $scope.cards.concat(additionalCards);
        $scope.$digest();
        setTimeout(function(){
            $scope.$emit('repositionCards');
        }, 1);
    };
}]);