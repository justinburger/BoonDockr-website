boondockr.directive('boondockrCampInformation', function() {
    return {
        templateUrl: 'campsite/campinformation/campinformation.html',
        controller: function ($scope, $element, $attrs) {
            $scope.campsite = $attrs.campsite;
        }
    }
});
