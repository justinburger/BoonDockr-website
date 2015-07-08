'use strict';

define("services/campsiteSearch", ['angular'],
    function (app) {
        angular.module('boondockr.campsiteSearch', ['ngRoute'])
            .factory('campsiteSearch', function ($http) {
                return {
                    basicSearch: function (searchText) {
                        if (searchText == ''){
                            return false;
                        }

                        return true;
                    },
                    getCampsitesByRegionStateCounty: function(region, state, county){
                        var searchParams = {
                            searchParams:{
                                state: {
                                    value:state,
                                    range:'equals'
                                }
                            }
                        }
                        return $http.post('http://devapi.boondockr.com/search', searchParams)
                            .then(
                            function (response) {
                                return response.data;
                            }
                        )
                    }
                };
            });

        return angular.module('boondockr.campsiteServices');
    });