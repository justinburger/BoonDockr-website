'use strict';

define("campsiteList/campsiteList", ['core/app'], function (app) {
    require(['core/app'],function(app) {
        app.directive('campsiteList', function () {
            return {
                scope: {
                    campsites: '@'
                },
                templateUrl: 'campsiteList/campsiteList.html',
                controller: function ($scope, $element, $attrs) {

                    $scope.campsitesResults = $attrs.campsitesResults;
                    console.log("CAMPSITE:" + $scope.campsitesResults);
                }
            }
        });
    });
});