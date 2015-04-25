'use strict';



define(['angularAMD',
        'angular-route',
        'jquery',
        'bootstrap',
        'header',
        'sotw','search','about','home','campsite','ObtainCampsite'],
    function (angularAMD, angularRoute, jquery, bootstrap) {
  var boondockr = angular.module('boondockr', [
    'ngRoute',
    'boondockr.header',
    'boondockr.sotw',
    'boondockr.search',
    'boondockr.about',
    'boondockr.home',
    'boondockr.campsite',
    'boondockr.ObtainCampsite'
  ]).
      config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
      }]);
  return angularAMD.bootstrap(boondockr);
});



