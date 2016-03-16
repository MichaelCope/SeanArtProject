/// <reference path="../../tsd.d.ts" />
var RouteConfiguration = require("./RouteConfig");
exports.ModuleName = "Components.Config";
angular.module(exports.ModuleName, [])
    .config(RouteConfiguration)
    .config(function ($mdIconProvider, $mdThemingProvider) {
    $mdIconProvider
        .defaultIconSet('./assets/svg/avatars.svg', 128)
        .icon("google_plus", "./assets/svg/google_plus.svg", 512)
        .icon("hangouts", "./assets/svg/hangouts.svg", 512)
        .icon("twitter", "./assets/svg/twitter.svg", 512)
        .icon("phone", "./assets/svg/phone.svg", 512)
        .icon('menu', './assets/svg/menu.svg', 24);
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('purple');
})
    .run(["$rootScope", "$state", function ($rootScope, $state) {
        $rootScope.$state = $state;
    }]);
//# sourceMappingURL=ConfigModule.js.map