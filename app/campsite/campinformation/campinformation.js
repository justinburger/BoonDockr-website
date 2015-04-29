'use strict';

define("campsite/campinformation/campinformation",
    ['core/app', 'campsite/campsite','angularAMD'], function (app, campsite) {
        require(['core/app'],function(app) {
            app.directive('boondockrCampInformation', function () {
                return {
                    templateUrl: 'campsite/campinformation/campinformation.html',
                    controller: function ($scope, $element, $attrs) {
                        $scope.campsite = $attrs.campsite;
                    }
                }
            });
        });
});
