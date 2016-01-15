'use strict';

define("admin/edit",['core/app',
    '../services/campsiteServices'], function (app) {

    angular.module('boondockr.adminEdit', ['ngRoute', 'boondockr.campsiteServices'])
        .controller('AdminEditCtrl', ['$scope','campsiteService', function ($scope, campsiteService) {

            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })

            campsiteService.getAllCampsites()
                .then(function (data) {
                    $scope.campsites = data;
                    return;
                });

            $scope.loadCampsiteToEdit = function(id){
                campsiteService.getCampsiteDetailBasedOnID(id)
                    .then(function (data) {
                        $scope.campsite = data;
                        return;
                    });
            };


        }]);

    return angular.module('boondockr.adminEdit');
});