'use strict';

define("register/register",['core/app'], function (app) {

    angular.module('boondockr.register', ['ngRoute'])
        .controller('LoginCtrl', ['$scope', function ($scope) {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }]);
});