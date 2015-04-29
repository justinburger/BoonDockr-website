'use strict';

define("campsite/cellcoverage/cellcoverage", ['core/app'], function (app) {
    require(['core/app'],function(app) {
        app.directive('boondockrCellCoverage', function () {
            return {
                templateUrl: 'campsite/cellcoverage/cellcoverage.html',
                controller: function ($scope, $element, $attrs) {
                    $scope.campsite = $attrs.campsite;
                }
            }
        });
    });
});