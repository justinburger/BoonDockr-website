'use strict';

define("services/mockCampsiteServices", [],
    function (app) {
        angular.module('boondockr.mockCampsiteServices', [])
            .factory('mockCampsiteService', function ($q) {
                return {
                    /**
                     * Get Campsite Detail Based on URL Name
                     * simple name based record lookup.
                     *
                     * @param String campName
                     * @returns {*} JSON value of campsite information if exists.
                     */
                    getCampsiteDetailBasedOnURLName: function (campName) {
                        var mockCampsite = {"id":"2","tags":["canyon"," cottonwood"," cell"],"url_name":"cottonwoodcanyon","title":"Cottonwood Canyon State Park","region":"Pacific Northwest","state":"OR","county":"Wasco","shortdesc":"Cottonwood Canyon State Park, established in 2013, is the second largest state park in Oregon, encompassing 8,000 acres on the lower John Day River. It's primitive campsite offers a great jumping off point to both hikers and mountain bikers looking to explore this rugged and vast region of Oregon.","longdesc":null,"lat":"45.4838","lon":"-120.459","elevation":"548","paved_road_distance":"0","paved_road_name":"Highway 206","paved_road_lat":"45.4784","paved_road_lon":"-120.472","closest_town_name":"Condon","closest_town_distance":"25","closest_town_lat":"45.2369","closest_town_lon":"-120.185","closest_propane_name":"unknown","closest_propane_lat":"45.2369","closest_propane_lon":"-120.185","closest_propane_distance":"28","closest_gas_name":"unknown","closest_gas_lat":"45.2369","closest_gas_lon":"-120.185","closest_gas_distance":"28","closest_dump_station_lat":"45.2369","closest_dump_station_lon":"-120.185","closest_dump_station_name":"unknown","closest_dump_station_distance":"28","dump_station":"no","terrian":"Desert, Limited Tree Cover","picnic_benches":"yes","fire_pits":"yes","campsite_type":"Gravel, Assigned","cost":"6","dumpster":"yes","recycle":"yes","potable_water":"seasonal","max_stay":"14","max_rig_length":"99","max_rig_comments":"no real limit","ranger_patrol_frequency":"daily","update_ts":"2015-01-25 16:19:06","create_ts":"2015-01-25 00:00:00","bathrooms":"yes","bathroom_comments":"Bathrooms are at the day parking section of the park.","ownership":"Oregon State Parks","ownership_phone":"(541) 394-0002","seasons":"Year round","popularity":"low","popularity_comments":"During multiple days over the coarse of a month, we saw less than 5 other RV'ers and few day hikers.","owner_website":"http:\/\/www.oregonstateparks.org\/index.cfm?do=parkPage.dsp_parkPage&parkId=195","cell_att_coverage":"no","cell_att_coverage_type":"","cell_att_coverage_strength":null,"cell_att_coverage_comments":null,"cell_verizon_coverage":"no","cell_verizon_coverage_type":"unknown","cell_verizon_coverage_strength":null,"cell_verizon_coverage_comments":null,"cell_sprint_coverage":"no","cell_sprint_coverage_type":"unknown","cell_sprint_coverage_strength":null,"cell_sprint_coverage_comments":null,"cell_tmobile_coverage":"no","cell_tmobile_coverage_type":"unknown","cell_tmobile_coverage_strength":null,"cell_tmobile_coverage_comments":null};
                        $q.resolve(mockCampsite);

                    },
                    isValidCampsiteURLName: function (campName) {
                        if (campName == ''){
                            return false;
                        }
                        return true;
                    }
                };
            });

        return angular.module('boondockr.mockCampsiteServices');
    });