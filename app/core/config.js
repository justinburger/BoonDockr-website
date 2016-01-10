'use strict';

define("core/config",[
        'angular',
    ],
    function (a) {

        angular.module('boondockr.settings', [])
            .constant('ENDPOINT_URL', 'http://boondockr-services-dev2.elasticbeanstalk.com/');
    }
);
