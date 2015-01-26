boondockr.directive('boondockrNavagation', function() {
    return {
        templateUrl: 'campsite/navagation/navagation.html',
        controller: function ($scope, $element, $attrs) {
            $scope.campsite = $attrs.campsite;
        }
    }
});
