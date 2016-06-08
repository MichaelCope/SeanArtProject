"use strict";
/// <reference path="../../tsd.d.ts" />
var main_controller_1 = require('../../main/main.controller');
var RouteConfiguration = (function () {
    function RouteConfiguration(stateProvider, urlRouterProvider) {
        stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: main_controller_1.MainController.controllerName,
            controllerAs: main_controller_1.MainController.controllerAs
        });
        urlRouterProvider.otherwise('/');
    }
    RouteConfiguration.$inject = ["$stateProvider", "$urlRouterProvider"];
    return RouteConfiguration;
}());
module.exports = RouteConfiguration;
//# sourceMappingURL=RouteConfig.js.map