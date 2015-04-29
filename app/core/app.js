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
        'campsite/campsite'
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
            'boondockr.obtainCampsite'
          ]);

        /**
         * Route Provider Setup
         */
        boondockr.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/about', {
                templateUrl: 'about/about.html'
            })
        }]);

        boondockr.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/campsite/:campName', {
                templateUrl: 'campsite/campsite.html'
            });
        }])

        boondockr.config(['$routeProvider', function($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/home'});
              }]);



        return angularAMD.bootstrap(boondockr);
});



