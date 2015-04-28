'use strict';
define("campsite/campsite",['core/app'], function (app) {

    angular.module('boondockr.campsite', ['ngRoute', 'boondockr.ObtainCampsite'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/campsite/:campName', {
                templateUrl: 'templates/campsite.html',
                controller: 'CampsiteCtrl'
            });
        }])
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
});