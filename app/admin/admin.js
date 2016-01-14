'use strict';

define("admin/admin",['core/app',
    '../services/campsiteServices'], function (app) {

    angular.module('boondockr.admin', ['ngRoute', 'boondockr.campsiteServices'])
        .controller('AdminCtrl', ['$scope','campsiteService', function ($scope, campsiteService) {

            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })

            campsiteService.getAllCampsites()
                .then(function (data) {
                    $scope.campsites = data;
                    return;
                });
        }]);

    return angular.module('boondockr.admin');
});