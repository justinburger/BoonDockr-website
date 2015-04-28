'use strict';

define("sotw/sotw", ['core/app'], function (app) {
    angular.module('boondockr.sotw', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/sotw', {
                templateUrl: 'templates/sotw.html',
                controller: 'SotwCtrl'
            });
        }])


        .controller('SotwCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});
