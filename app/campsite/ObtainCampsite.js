
var ObtainCampsite= angular.module('boondockr.ObtainCampsite',[]);


ObtainCampsite.factory('campsiteService', function($http) {
    return {
        getCampsiteDetailBasedOnURLName: function() {
            return $http.get('http://devapi.boondockr.com/campsite/cottonwoodcanyon')
                .then(
                function(response){
                    return response.data;
                }
            )
        }
    };
});
