var seerServices = angular.module('seerServices', ['ngResource']);

seerServices.factory('CardService', ['$resource',
  function($resource){
    return $resource('cards.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);