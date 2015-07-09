'use strict';

define("campsite/mock/mock", ['core/app'], function (app) {
    angular.module('boondockr.mock', ['ngRoute'])
        .controller('MockCampsiteCtrl', ['$scope', function ($scope) {
            $(function () {
                $scope.campsite = [];
                $scope.campsite.title = "Mock Title";

                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);

    return angular.module('boondockr.mock');
});
