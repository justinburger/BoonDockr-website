'use strict';

define("search/search", ['core/app'], function (app) {


    angular.module('boondockr.search', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/search', {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            });
        }])


        .controller('SearchCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});
