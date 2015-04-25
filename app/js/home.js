'use strict';


define(['home'], function (app) {

    angular.module('boondockr.home', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            });
        }])


        .controller('HomeCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});