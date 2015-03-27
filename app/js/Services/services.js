var servicesModule = angular.module('servicesModule', ['ngResource']);

servicesModule.factory('CardService', ['$resource',
  function($resource){
    return $resource('http://graceful-medley-89220.appspot.com/cards.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);