/// <reference path="tsd.d.ts" />
var ConfigModule = require("./components/config/ConfigModule");
var main_controller_1 = require('./main/main.controller');
var navbar_directive_1 = require('../app/components/navbar/navbar.directive');
var seanArtProject;
(function (seanArtProject) {
    'use strict';
    angular.module('seanArtProject', ['ngAnimate',
        'ngSanitize',
        'ngResource',
        'ui.router',
        'ngMaterial',
        'toastr',
        ConfigModule.ModuleName,
    ])
        .constant('malarkey', malarkey)
        .constant('moment', moment)
        .controller(main_controller_1.MainController.controllerName, main_controller_1.MainController)
        .directive('acmeNavbar', navbar_directive_1.acmeNavbar);
})(seanArtProject || (seanArtProject = {}));
//# sourceMappingURL=index.js.map