'use strict';
define("campsite/campsite",
        ['core/app',
         'campsite/obtaincampsite/obtaincampsite',
        'campsite/campinformation/campinformation',
        'campsite/cellcoverage/cellcoverage',
        'campsite/navigation/navigation',
        'campsite/tags/tags',
        "campsite/rules/rules"],
    function (app) {
        angular.module('boondockr.campsite', ['ngRoute', 'boondockr.obtainCampsite'])
            .factory('campsiteService', function ($http) {
                return {
                    getCampsiteDetailBasedOnURLName: function (campName) {
                        return $http.get('http://devapi.boondockr.com/campsite/' + campName)
                            .then(
                            function (response) {
                                return response.data;
                            }
                        )
                    }
                };
            })
            .controller('CampsiteCtrl', ['$scope', 'campsiteService', '$routeParams', function ($scope, campsiteService, $routeParams) {
                campsiteService.getCampsiteDetailBasedOnURLName($routeParams.campName).then(function (data) {
                    $scope.campsite = data;
                });

                $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                })
            }]);
    return angular.module('boondockr.campsite');
});