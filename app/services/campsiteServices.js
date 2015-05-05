'use strict';

define("services/campsiteServices", [],
    function (app) {
        angular.module('boondockr.campsiteServices', ['ngRoute'])
            .factory('campsiteService', function ($http) {
                return {
                    /**
                     * Get Campsite Detail Based on URL Name
                     * simple name based record lookup.
                     *
                     * @param String campName
                     * @returns {*} JSON value of campsite information if exists.
                     */
                    getCampsiteDetailBasedOnURLName: function (campName) {
                        return $http.get('http://devapi.boondockr.com/campsite/' + campName)
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