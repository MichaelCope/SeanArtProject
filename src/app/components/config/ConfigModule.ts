/// <reference path="../../tsd.d.ts" />

import RouteConfiguration = require("./RouteConfig");

export var ModuleName: string = "Components.Config";

angular.module(ModuleName,[])
  .config(RouteConfiguration)
  .run(["$rootScope", "$state", ($rootScope: ng.IRootScopeService, $state: ng.ui.IStateService) => {
    (<any>$rootScope).$state = $state;
  }]);
