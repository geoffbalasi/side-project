'use strict';

/* jasmine specs for controllers go here */
describe('Seer controllers', function() {
  describe('CardListCtrl', function(){
    beforeEach(module('SeerApp'));
    it('should create "cards" model with 3 cards', inject(function($controller) {
      var scope = {},
          ctrl = $controller('CardListCtrl', {$scope:scope});
      
      expect(scope.cards.length).toBe(3);
    }));
    it('should be named "Seer"', inject(function($controller) {
      var scope = {},
          ctrl = $controller('CardListCtrl', {$scope:scope});
      
      expect(scope.name).toBe('Seer');
    }));
  });
});