'use strict';

define("services/campsiteServices", ['angular'],
    function (app) {
        angular.module('boondockr.campsiteServices', ['ngRoute','boondockr.settings'])
            .factory('campsiteService', function ($http,ENDPOINT_URL) {
                return {
                    /**
                     * Get Campsite Detail Based on URL Name
                     * simple name based record lookup.
                     *
                     * @param String campName
                     * @returns {*} JSON value of campsite information if exists.
                     */
                    getCampsiteDetailBasedOnURLName: function (campName) {

                        return $http.get(ENDPOINT_URL +'/campsite/' + campName)
                            .then(
                            function (response) {
                                return response.data;
                            }
                        )
                    },
                    getCampsiteDetailBasedOnID: function (id) {

                        return $http.get(ENDPOINT_URL +'/campsite/' + id)
                            .then(
                            function (response) {
                                return response.data;
                            }
                        )
                    },
                    getSupportedCountiesByState: function(state){
                        return $http.get(ENDPOINT_URL +'counties/' + state)
                            .then(
                            function (response) {
                                return response.data;
                            }
                        )
                    },
                    getAllCampsites: function(state){
                        return $http.get(ENDPOINT_URL +'campsites/all')
                            .then(
                            function (response) {
                                return response.data;
                            }
                        )
                    },
                    getSOTW: function(){
                        return $http.get(ENDPOINT_URL +'/setting/sotw')
                            .then(
                            function (response) {
                                return response.data;
                            }
                        )
                    },
                    isValidCampsiteURLName: function (campName) {
                        if (campName == ''){
                            return false;
                        }

                        return true;
                    }
                };
            });

        return angular.module('boondockr.campsiteServices');
    });