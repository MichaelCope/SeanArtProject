/// <reference path="../../tsd.d.ts" />

import RouteConfiguration = require("./RouteConfig");

export var ModuleName:string = "Components.Config";

angular.module(ModuleName, [])
    .config(RouteConfiguration)
    .config(($mdIconProvider: angular.material.IIconProvider,
             $mdThemingProvider: angular.material.IThemingProvider) => {
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg'          , 128)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512)
            .icon('menu',        './assets/svg/menu.svg'        , 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('purple');
    })
    .run(["$rootScope", "$state", ($rootScope:ng.IRootScopeService, $state:ng.ui.IStateService) => {
        (<any>$rootScope).$state = $state;
    }]);
