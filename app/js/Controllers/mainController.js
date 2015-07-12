'use strict';
function init() {
    window.init();
}

/* Card List Controllers */

angular.module('controllersModule',[])
  .controller('mainController', ['$scope', 'CardService', '$window', function($scope, CardService, $window) {
    $window.init = function() {
        console.log("got to window.init in mainController");
        $scope.$apply($scope.initgapi);
    };
    $scope.initgapi = function() {
        console.log("in initgapi");
        var ROOT = '//' + window.location.host + '/_ah/api';
        gapi.client.load('alwaysnext', 'v1', function() {
                 gapi.client.alwaysnext.greetings.listGreeting().execute(function(resp){
                     alert(resp);
                 });
        }, ROOT);
    };
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
