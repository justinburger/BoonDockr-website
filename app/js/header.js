'use strict';




define(['header'], function (app) {
    angular.module('boondockr.header', ['ngRoute'])
        .controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }]);
});