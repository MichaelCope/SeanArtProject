/// <reference path="tsd.d.ts" />
var ConfigModule = require("./components/config/ConfigModule");
var main_controller_1 = require('./main/main.controller');
var dialogController_1 = require("./main/dialogController");
var seanArtProject;
(function (seanArtProject) {
    'use strict';
    angular.module('seanArtProject', ['ngAnimate',
        'ngSanitize',
        'ngResource',
        'ui.router',
        'ngMaterial',
        'ngMdIcons',
        'ngMessages',
        'toastr',
        ConfigModule.ModuleName,
    ])
        .constant('moment', moment)
        .controller(main_controller_1.MainController.controllerName, main_controller_1.MainController)
        .controller(dialogController_1.DialogController.controllerName, dialogController_1.DialogController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512)
            .icon('menu', './assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default').dark()
            .primaryPalette('light-blue')
            .accentPalette('red');
    });
})(seanArtProject || (seanArtProject = {}));
//# sourceMappingURL=index.js.map