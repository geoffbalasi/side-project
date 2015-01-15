'use strict';

/* jasmine specs for controllers go here */
describe('Seer controllers', function() {
  describe('CardListCtrl', function(){
    var scope, ctrl, $httpBackend;
    
    //Load our app module definition before each test.
    beforeEach(module('SeerApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('cards.json'). 
        respond([{name: 'Gone Girl'}, {name: 'Selma'}]);
      
      scope = $rootScope.$new();
      ctrl = $controller('CardListCtrl', {$scope: scope});
    }));
    
    
    it('should create "cards" model with 2 cards', function() {
      expect(scope.cards).toBeUndefined();
      $httpBackend.flush();
      
      expect(scope.cards).toEqual([{name: 'Gone Girl'}, {name: 'Selma'}]);
    });
    
    it('should be named "Seer"', function() {
      expect(scope.name).toBe('Seer');
    });
  });
  describe('CardCtrl', function(){
    var scope, ctrl;
    
    beforeEach(module('SeerApp'));
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('CardCtrl', {$scope: scope});
    }));
    
    it('should change card size', function() {
      expect(scope.size).toBe('closed');
      scope.changeSize();
      expect(scope.size).toBe('open');
      scope.changeSize();
      expect(scope.size).toBe('closed');
    });
  });
});