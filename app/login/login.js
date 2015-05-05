'use strict';

define("login/login",['core/app'], function (app) {

    angular.module('boondockr.login', ['ngRoute'])
        .controller('LoginCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});