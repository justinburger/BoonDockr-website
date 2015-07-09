'use strict';

define("about/about",['core/app'], function (app) {

    angular.module('boondockr.about', ['ngRoute'])
        .controller('AboutCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});