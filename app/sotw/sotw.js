'use strict';

angular.module('boondockr.sotw', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/sotw', {
            templateUrl: 'sotw/sotw.html',
            controller: 'SotwCtrl'
        });
    }])


    .controller('SotwCtrl', ['$scope', function($scope){
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }]);