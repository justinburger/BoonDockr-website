'use strict';

define("about/about",['core/app'], function (app) {

    angular.module('boondockr.about', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            });
        }])
        .controller('AboutCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});