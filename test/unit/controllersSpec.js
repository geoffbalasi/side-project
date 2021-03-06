'use strict';

/* jasmine specs for controllers go here */
describe('Seer controllers', function() {
  
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  
  beforeEach(module('servicesModule'));
  
  describe('mainController', function(){
    var scope, ctrl, $httpBackend;
    
    //Load our app module definition before each test.
    beforeEach(module('App'));
    
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('cards.json'). 
        respond([{name: 'Gone Girl'}, {name: 'Selma'}]);
      
      scope = $rootScope.$new();
      ctrl = $controller('mainController', {$scope: scope});
    }));
    
    
    it('should create "cards" model with 2 cards', function() {
      expect(scope.cards).toEqualData([]);
      $httpBackend.flush();
      
      expect(scope.cards).toEqualData(
        [{name: 'Gone Girl'}, {name: 'Selma'}]);
    });
    
  });
  describe('cardController', function(){
    var scope, ctrl;
    
    beforeEach(module('App'));
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('cardController', {$scope: scope});
    }));
    
    it('should change card size', function() {
      expect(scope.open).toBe(false);
      scope.changeSize();
      expect(scope.open).toBe(true);
      scope.changeSize();
      expect(scope.open).toBe(false);
    });
  });
});