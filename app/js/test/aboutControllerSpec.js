'use strict';

define(['core/app','about/about', 'angular-mocks'], function(app,about) {

    describe('AboutController', function () {
        var scope, $controllerConstructor, $moduleConstructor;
        beforeEach(module("boondockr.about"));

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            $controllerConstructor = $controller;
        }));

        it("should load about text", function () {
            return true;
        })

        it("should have a AboutCtrl controller function",function(){
                var about = $controllerConstructor('AboutCtrl',{$scope:scope});
            return true;
            });

    });
});
