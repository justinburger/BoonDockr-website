'use strict';
define("campsite/campsite",
            ['core/app',
            '../services/campsiteServices',
            'campsite/campinformation/campinformation',
            'campsite/cellcoverage/cellcoverage',
            'campsite/navigation/navigation',
            'campsite/breadcrumb/breadcrumb',
            'campsite/images/images',
            'campsite/tags/tags',
            'campsite/rules/rules',
            'campsite/imageInspectorModelImageIcon/imageInspectorModelImageIcon'],
    function (app) {
        angular.module('boondockr.campsite', ['ngRoute', 'boondockr.campsiteServices'])
            .controller('CampsiteCtrl', ['$scope', 'campsiteService', '$routeParams', function ($scope, campsiteService, $routeParams) {

                $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                })

                $scope.defaultMode = false;
                $scope.mobileMode = true;

                campsiteService.getCampsiteDetailBasedOnURLName($routeParams.campName)
                    .then(function (data) {
                        $scope.campsite = data;
                        return;
                        });
            }]);


    return angular.module('boondockr.campsite');
});