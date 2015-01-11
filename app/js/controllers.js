'use strict';

/* Controllers */

var seerApp = angular.module('SeerApp', []);

seerApp.controller('CardListCtrl', function ($scope) {
  $scope.cards = [
    {'name': 'Gone Girl',
     'consensus': 'Dark, intelligent, and stylish to a fault, Gone Girl plays to director David Fincher\'s sick strengths while bringing the best out of stars Ben Affleck and Rosamund Pike.'},
    {'name': 'The Imitation Game',
     'consensus': 'With an outstanding starring performance from Benedict Cumberbatch illuminating its fact-based story, The Imitation Game serves as an eminently well-made entry in the "prestige biopic" genre.'},
    {'name': 'Taken 3',
     'consensus': ' Hampered by toothless PG-13 action sequences, incoherent direction, and a hackneyed plot, Taken 3 serves as a clear signal that it\'s well past time to retire this franchise.'}
  ];
  $scope.name = "Seer";
});