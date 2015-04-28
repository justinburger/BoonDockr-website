var allTestFiles = [];

allTestFiles.push("core/app");
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path;
    return path.replace(/^\/base\//, '')
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});



require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: 'base/app',

    paths: {
        'angular': '/base/bower_components/angular/angular',
        'angular-route': '/base/bower_components/angular-route/angular-route',
        'angular-mocks': '/base/bower_components/angular-mocks/angular-mocks',
        'angularAMD': '/base/bower_components/angularAMD/angularAMD.min',
        'bootstrap': '/base/node_modules/bootstrap/dist/js/bootstrap.min',
        'jquery': '/base/app/contrib/jquery.min'
    },
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-mocks': ['angular'],
        'bootstrap': {"deps": ['jquery']},
        'ngload': ['angularAMD']
    },

    // dynamically load all test files

    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
