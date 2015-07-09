'use strict';

define("search/search", ['core/app'], function (app) {


    angular.module('boondockr.search', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/search', {
                templateUrl: 'search/search.html',
                controller: 'SearchCtrl'
            });
        }])


        .controller('SearchCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })

            $scope.toggleAdvancedPane = function(){
                if($scope.displayAdvancedPane){
                    $scope.displayAdvancedPane = false;
                    return;
                }

                $scope.displayAdvancedPane = true;
                return;

            };
        }]);
});
