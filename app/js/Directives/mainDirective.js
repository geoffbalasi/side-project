
var myDirectives = angular.module('directivesModule', []);

// Directive that adds more cards when you reach the bottom of the page
myDirectives.directive('infiniteScroll', ['$window', '$document', function($window, $document) {
	return {
		link: function(scope) {
			angular.element($window).scroll(function(){
                if  (angular.element($window).scrollTop() == angular.element($document).height() - angular.element($window).height()){
                    scope.addCards();
                }
            });
		}
	}
}]);

// Directive that renders a card, currently takes the url of the card template as a param 
myDirectives.directive("card", function() {
        return({
            controller: "cardController",
            restrict: "A",
            templateUrl: template
        });
 
        function template(element, attrs) {
        	return attrs.url;
        };
    }
);

// Directive that emits an event when the last card is built to position them 
myDirectives.directive('onLastRepeat', function() {
    return function(scope, element, attrs) {
        if (scope.$last) setTimeout(function(){
            scope.$emit('repositionCards');
        }, 1);
    };
});

// Directive that positions the cards in the correct locations
myDirectives.directive('cardLocations', ['$window', function($window) {
	return {
		link: function(scope) {

			var colCount = 0;
			var colWidth = 300;
			var margin = 10;
			var spaceLeft = 0;
			var windowWidth = 0;
			var cards = [];

			scope.onResize = function() {
                windowWidth = $window.innerWidth;
				cards = [];
				colCount = Math.floor(windowWidth/(colWidth+margin*2));
				spaceLeft = (windowWidth - ((colWidth*colCount)+(margin*(colCount-1)))) / 2 - 30;
				for(var i=0;i<colCount;i++){
					cards.push(margin);
				}
				scope.positionCards();
            };

            scope.positionCards = function() {
            	angular.forEach(angular.element(".block"), function(block, i){
				    var min = Array.min(cards);
					var index = cards.indexOf(min);
					var leftPos = margin+(index*(colWidth+margin));
					$(block).css({
						'left':(leftPos+spaceLeft)+'px',
						'top':min+'px'
					});
					cards[index] = min+$(block).outerHeight()+margin;
				});
			};

			Array.min = function(array) {
			    return Math.min.apply(Math, array);
			};

			// repositions cards when the 'repositionCards' event is emited
			scope.$on('repositionCards', function(scope){
		        scope.currentScope.onResize();
		    });

			// repositions cards on window resize
            angular.element($window).bind('resize', function() {
                scope.onResize();
            });

            // respositions cards when a filter words is searched
            scope.$watch('query', function (newVal, oldVal) {
            	setTimeout(function(){ scope.onResize();}, 50);
            });
		}
	}
}]);