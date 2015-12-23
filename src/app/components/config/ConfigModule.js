/// <reference path="../../tsd.d.ts" />
var RouteConfiguration = require("./RouteConfig");
exports.ModuleName = "Components.Config";
angular.module(exports.ModuleName, [])
    .config(RouteConfiguration)
    .run(["$rootScope", "$state", function ($rootScope, $state) {
        $rootScope.$state = $state;
    }]);
//# sourceMappingURL=ConfigModule.js.map