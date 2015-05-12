'use strict';

define("campsite/imageInspectorModelImageIcon/imageInspectorModelImageIcon",
    ['core/app', 'campsite/campsite','angularAMD'], function (app, campsite) {
        require(['core/app'],function(app) {
            app.directive('boondockrImageInspector', function () {
                return {
                    templateUrl: 'campsite/imageInspectorModelImageIcon/imageInspectorModelImageIcon.html',
                    scope: {
                        category: '@',
                        myCampsite: '=myCampsite'
                    },
                    controller: function ($scope, $element, $attrs) {
                        $scope.category = $attrs.category;
                        $scope.myCampsite = $attrs.myCampsite;

                        //$scope.campsite = $attrs.campsite;

                        $scope.imageInspectorModelImageId =0;

                        $scope.setImageInspectorModelId = function(id) {
                            $scope.imageInspectorModelImageId = id;
                        }
                    }
                }
            });
        });
    });
