var servicesModule = angular.module('servicesModule', ['ngResource']);

servicesModule.factory('CardService', ['$resource',
  function($resource){
    return $resource('cards.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);