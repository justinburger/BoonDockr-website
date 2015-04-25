'use strict';

define(['about'], function (app) {

    angular.module('boondockr.about', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/about', {
                templateUrl: 'about/about.html',
                controller: 'AboutCtrl'
            });
        }])


        .controller('AboutCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});