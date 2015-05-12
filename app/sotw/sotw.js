'use strict';

define("sotw/sotw", ['core/app','../services/campsiteServices'], function (app) {
    angular.module('boondockr.sotw', ['ngRoute', 'boondockr.campsiteServices'])
        .controller('SotwCtrl', ['$scope', 'campsiteService', '$location', function ($scope, campsiteService, $location) {
            campsiteService.getSOTW().then(function (data) {
                $location.path('/campsite/' + data.value);
                return;
            });
        }]);
});
