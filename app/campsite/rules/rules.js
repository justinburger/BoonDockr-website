boondockr.directive('boondockrRules', function() {
    return {
        templateUrl: 'campsite/rules/rules.html',
        controller: function ($scope, $element, $attrs) {
            $scope.campsite = $attrs.campsite;
        }
    }
});
