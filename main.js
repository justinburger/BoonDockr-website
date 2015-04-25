require.config({
    baseUrl: "js",
    paths: {
        'angular': '/bower_components/angular/angular',
        'angular-route': '/bower_components/angular-route/angular-route',
        'angularAMD': '/bower_components/angularAMD/angularAMD.min',
        'bootstrap': '/node_modules/bootstrap/dist/js/bootstrap.min',
        'jquery': '/jquery.min',
    },
    shim: {
            'angularAMD': ['angular'],
            'angular-route': ['angular'],
            'bootstrap' : { "deps" :['jquery'] },
            'ngload': ['angularAMD']},
    deps: ['app']
});