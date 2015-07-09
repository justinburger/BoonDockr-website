'use strict';

define("campsite/tags/tags", ['core/app'], function (app) {
    require(['core/app'],function(app) {
         app.directive('boondockrTags', function () {
            return {
                templateUrl: 'campsite/tags/tags.html',
                controller: function ($scope, $element, $attrs) {
                    $scope.campsite = $attrs.campsite;
                }
            }
        });
    });
});