'use strict';

define("core/header", ['core/app'], function (app) {
    angular.module('boondockr.header', ['ngRoute'])
        .controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }]);
});