
var myDirectives = angular.module('directivesModule', []);

myDirectives.directive('infiniteScroll', ['$window', '$document', function($window, $document) {
	return {
		link: function(scope) {
			angular.element($window).scroll(function(){
                if  (angular.element($window).scrollTop() == angular.element($document).height() - angular.element($window).height()){
                    scope.addCards();
                }
            });

            scope.$watch('load', function (newVal, oldVal) {
            	setTimeout(function(){ scope.onResize();}, 50);
            });
		}
	}
}]);

myDirectives.directive('cardLocations', ['$window', function($window) {
	return {
		link: function(scope) {

			var colCount = 0;
			var colWidth = 300;
			var margin = 10;
			var spaceLeft = 0;
			var windowWidth = 0;
			var blocks = [];

			scope.onResize = function() {
                windowWidth = $window.innerWidth;
				blocks = [];
				colCount = Math.floor(windowWidth/(colWidth+margin*2));
				spaceLeft = (windowWidth - ((colWidth*colCount)+(margin*(colCount-1)))) / 2 - 30;
				for(var i=0;i<colCount;i++){
					blocks.push(margin);
				}
				scope.positionBlocks();
            };

            scope.positionBlocks = function() {
            	angular.forEach(angular.element(".block"), function(block, i){
				    var min = Array.min(blocks);
					var index = blocks.indexOf(min);
					var leftPos = margin+(index*(colWidth+margin));
					$(block).css({
						'left':(leftPos+spaceLeft)+'px',
						'top':min+'px'
					});
					blocks[index] = min+$(block).outerHeight()+margin;
				});
			};

			Array.min = function(array) {
			    return Math.min.apply(Math, array);
			};

            setTimeout(function(){ 
            	scope.onResize();
            }, 1500);

            angular.element($window).bind('resize', function() {
                scope.onResize();
            });

            scope.$watch('relocate', function (newVal, oldVal) {
            	setTimeout(function(){ scope.onResize();}, 50);
            });

            scope.$watch('query', function (newVal, oldVal) {
            	setTimeout(function(){ scope.onResize();}, 50);
            });
		}
	}
}]);