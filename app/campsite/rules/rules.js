'use strict';

define("campsite/rules/rules", ['core/app'], function (app) {
    require(['core/app'],function(app) {
        app.directive('boondockrRules', function () {
            return {
                templateUrl: 'campsite/rules/rules.html',
                controller: function ($scope, $element, $attrs) {
                    $scope.campsite = $attrs.campsite;
                }
            }
        });
    });
});