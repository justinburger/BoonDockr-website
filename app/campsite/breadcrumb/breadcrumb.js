'use strict';

define("campsite/breadcrumb/breadcrumb", ['core/app'], function (app) {
    require(['core/app'],function(app) {
        app.directive('boondockrBreadCrumb', function () {
            return {
                templateUrl: 'campsite/breadcrumb/breadcrumb.html',
                controller: function ($scope, $element, $attrs) {
                    $scope.campsite = $attrs.campsite;
                }
            }
        });
    });
});