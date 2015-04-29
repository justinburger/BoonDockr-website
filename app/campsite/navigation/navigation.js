define("campsite/navigation/navigation", ['core/app'], function (app) {
    require(['core/app'],function(app) {

        app.directive('boondockrNavagation', function () {
            return {
                templateUrl: 'campsite/navigation/navigation.html',
                controller: function ($scope, $element, $attrs) {
                    $scope.campsite = $attrs.campsite;
                }
            }
        });
    });
});

