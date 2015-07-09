'use strict';

define("campsite/images/images", ['core/app'], function (app) {
    require(['core/app'],function(app) {
        app.directive('boondockrImages', function () {
            return {
                templateUrl: 'campsite/images/images.html',
                controller: function ($scope, $element, $attrs) {
                    $scope.campsite = $attrs.campsite;
                }
            }
        });
    });
});