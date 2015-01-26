'use strict';

angular.module('boondockr.header', ['ngRoute'])
    .controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);