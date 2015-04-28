'use strict';

define("CampInformation",['core/app', 'angular','cellcoverage','navigation','rules'], function (app, angular, cellcoverage, navigation, rules) {

    app.directive('boondockrCampInformation', function () {
        return {
            templateUrl: 'campsite/campinformation/campinformation.html',
            controller: function ($scope, $element, $attrs) {
                $scope.campsite = $attrs.campsite;
            }
        }
    });
});
