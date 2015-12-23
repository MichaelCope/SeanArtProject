/// <reference path="../../tsd.d.ts" />
var RouteConfiguration = (function () {
    function RouteConfiguration(stateProvider, urlRouterProvider) {
        stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        });
        urlRouterProvider.otherwise('/');
    }
    RouteConfiguration.$inject = ["$stateProvider", "$urlRouterProvider"];
    return RouteConfiguration;
})();
module.exports = RouteConfiguration;
//# sourceMappingURL=RouteConfig.js.map