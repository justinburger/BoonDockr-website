'use strict';

define("browse/browse",
    [
        'core/app',
        '../services/campsiteServices',
        'campsiteList/campsiteList',
        'services/campsiteSearch'
    ],
    function (app) {

    angular.module('boondockr.browse', ['ngRoute','boondockr.campsiteServices','boondockr.campsiteSearch'])
        .controller('BrowseCtrl', ['$scope', 'campsiteService','campsiteSearch', function ($scope, campsiteService, campsiteSearch) {
            $scope.regionSelected = 1;
            $scope.counties = [];
            $scope.campsites = [];

            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })

            $scope.regionList = [
                { id: 1, name: 'All' },
                { id: 2, name: 'Pacific West' },
                { id: 3, name: 'West North Central' },
                { id: 4, name: 'Mountain' },
                { id: 5, name: 'Mid-Atlantic' },
                { id: 6, name: 'West South Central' },
                { id: 7, name: 'East South Central' },
                { id: 8, name: 'East North Central' },
                { id: 9, name: 'South Atlantic' },
                { id: 10, name: 'New England' }

            ];

            $scope.stateList = [
                 {code: 'ALL', name: "All",             region: 'All'},
                 {code: 'AL', name: "Alabama",          region: 'East South Central'},
                 {code: 'AK', name: "Alaska",           region: 'Pacific West'},
                 {code: 'AZ', name: "Arizona",          region: 'Mountain'},
                 {code: 'AR', name: "Arkansas",         region: 'West South Central'},
                 {code: 'CA', name: "California",       region: 'Pacific West'},
                 {code: 'CO', name: "Colorado",         region: 'Mountain'},
                 {code: 'CT', name: "Connecticut",      region: 'New England'},
                 {code: 'DE', name: "Delaware",         region: 'South Atlantic'},
                 {code: 'FL', name: "Florida",          region: 'South Atlantic'},
                 {code: 'GA', name: "Georgia",          region: 'South Atlantic'},
                 {code: 'HI', name: "Hawaii",           region: 'Pacific West'},
                 {code: 'ID', name: "Idaho",            region: 'Mountain'},
                 {code: 'IL', name: "Illinois",         region: 'East North Central'},
                 {code: 'IN', name: "Indiana",          region: 'East North Central'},
                 {code: 'IA', name: "Iowa",             region: 'West North Central'},
                 {code: 'KS', name: "Kansas",           region: 'West North Central'},
                 {code: 'KY', name: "Kentucky",         region: 'East South Central'},
                 {code: 'LA', name: "Louisiana",        region: 'West South Central'},
                 {code: 'ME', name: "Maine",            region: 'New England'},
                 {code: 'MD', name: "Maryland",         region: 'South Atlantic'},
                 {code: 'MA', name: "Massachusetts",    region: 'New England'},
                 {code: 'MI', name: "Michigan",         region: 'East North Central'},
                 {code: 'MN', name: "Minnesota",        region: 'West North Central'},
                 {code: 'MS', name: "Mississippi",      region: 'East South Central'},
                 {code: 'MO', name: "Missouri",         region: 'West North Central'},
                 {code: 'MT', name: "Montana",          region: 'Mountain'},
                 {code: 'NE', name: "Nebraska",         region: 'West North Central'},
                 {code: 'NV', name: "Nevada",           region: 'Mountain'},
                 {code: 'NH', name: "New Hampshire",    region: 'New England'},
                 {code: 'NJ', name: "New Jersey",       region: 'Mid-Atlantic'},
                 {code: 'NM', name: "New Mexico",       region: 'Mountain'},
                 {code: 'NY', name: "New York",         region: 'Mid-Atlantic'},
                 {code: 'NC', name: "North Carolina",   region: 'South Atlantic'},
                 {code: 'ND', name: "North Dakota",     region: 'West North Central'},
                 {code: 'OH', name: "Ohio",             region: 'East North Central'},
                 {code: 'OK', name: "Oklahoma",         region: 'West South Central'},
                 {code: 'OR', name: "Oregon",           region: 'Pacific West'},
                 {code: 'PA', name: "Pennsylvania",     region: 'Mid-Atlantic'},
                 {code: 'RI', name: "Rhode Island",     region: 'New England'},
                 {code: 'SC', name: "South Carolina",   region: 'South Atlantic'},
                 {code: 'SD', name: "South Dakota",     region: 'West North Central'},
                 {code: 'TN', name: "Tennessee",        region: 'East South Central'},
                 {code: 'TX', name: "Texas",            region: 'West South Central'},
                 {code: 'UT', name: "Utah",             region: 'Mountain'},
                 {code: 'VT', name: "Vermont",          region: 'New England'},
                 {code: 'VA', name: "Virginia",         region: 'South Atlantic'},
                 {code: 'WA', name: "Washington",       region: 'Pacific West'},
                 {code: 'WV', name: "West Virginia",    region: 'South Atlantic'},
                 {code: 'WI', name: "Wisconsin",        region: 'East North Central'},
                 {code: 'WY', name: "Wyoming",          region: 'Mountain'}
                ];
            

            $scope.refreshStatesList = function(region){

            }

            $scope.updateCountyList = function(state){
                campsiteService.getSupportedCountiesByState(state)
                    .then(function (data) {
                        $scope.counties = data;
                        return;
                    });
            }

            $scope.updateCampsiteList = function(region, state, county){
                campsiteSearch.getCampsitesByRegionStateCounty(region, state, county) .then(function (data) {
                    $scope.campsites = data;
                    return;
                });
            }

            $scope.filterStatesByRegion = function(state){

                if($scope.regionList[$scope.regionSelected-1].name == 'All' || state.region == $scope.regionList[$scope.regionSelected-1].name){
                    return true;
                }

                return false;
            }

            $scope.toggleAdvancedPane = function(){
                if($scope.displayAdvancedPane){
                    $scope.displayAdvancedPane = false;
                    return;
                }

                $scope.displayAdvancedPane = true;
                return;

            };
        }]);
});
