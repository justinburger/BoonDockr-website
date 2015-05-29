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
                    }
                };
            });

        return angular.module('boondockr.campsiteServices');
    });