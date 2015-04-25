'use strict';

define(['search'], function (app) {


    angular.module('boondockr.search', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/search', {
                templateUrl: 'search/search.html',
                controller: 'SearchCtrl'
            });
        }])


        .controller('SearchCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});
