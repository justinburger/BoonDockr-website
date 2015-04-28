'use strict';

define("rules/rules", ['core/app',
    'angularAMD',
    'angular-route',
    'jquery',
    'bootstrap'], function (app) {
require(['core/app'],function(app){
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

