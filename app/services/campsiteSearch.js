'use strict';

define("services/campsiteSearch", ['angular'],
    function (app) {
        angular.module('boondockr.campsiteSearch', ['ngRoute','boondockr.settings'])
            .factory('campsiteSearch', function ($http,ENDPOINT_URL) {
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
                        return $http.post(ENDPOINT_URL + 'search', searchParams)
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