'use strict';

// Declare app level module which depends on views, and components
var boondockr = angular.module('boondockr', [
  'ngRoute',
  'boondockr.header',
  'boondockr.view1',
  'boondockr.sotw',
  'boondockr.search',
  'boondockr.about',
  'boondockr.home',
  'boondockr.view2',
  'boondockr.campsite',
  'boondockr.ObtainCampsite'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
