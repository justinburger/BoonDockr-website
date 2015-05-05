'use strict';

define("core/app",[
        'angularAMD',
        'angular-route',
        'jquery',
        'bootstrap',
        'facebook',
        'ngfacebook',
        'core/header',
        'sotw/sotw',
        'search/search',
        'about/about',
        'home/home',
        'login/login',
        'register/register',
        'campsite/campsite',
        'campsite/mock/mock'
    ],
    function (angularAMD, angularRoute, jquery, bootstrap) {
          var boondockr = angular.module('boondockr', [
            'ngRoute',
            'ngFacebook',
            'boondockr.header',
            'boondockr.sotw',
            'boondockr.search',
            'boondockr.about',
            'boondockr.home',
            'boondockr.campsite',
            'boondockr.login',
            'boondockr.register',
            'boondockr.mock'
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

        boondockr.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/mock', {
                templateUrl: 'campsite/mock/mock.html'
            });
        }]);

        boondockr.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/login', {
                templateUrl: 'login/login.html'
            });
        }]);

        boondockr.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/register', {
                templateUrl: 'register/register.html'
            });
        }]);



        return angularAMD.bootstrap(boondockr);
});



