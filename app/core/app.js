'use strict';

define("core/app",[
        'angularAMD',
        'angular-route',
        'jquery',
        'bootstrap',
        'core/header',
        'sotw/sotw',
        'search/search',
        'about/about',
        'home/home',
        'campsite/campsite',
        'campsite/ObtainCampsite',
        'campsite/campinformation',
        'campsite/cellcoverage',
        'navigation/navigation',
        "rules/rules"
    ],
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
          ]);
        boondockr.config(['$routeProvider', function($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/view1'});
              }]);



        return angularAMD.bootstrap(boondockr);
});



