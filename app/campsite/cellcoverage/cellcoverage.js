boondockr.directive('boondockrCellCoverage', function() {
    return {
        templateUrl: 'campsite/cellcoverage/cellcoverage.html',
        controller: function ($scope, $element, $attrs) {
            $scope.campsite = $attrs.campsite;
        }
    }
});
