/// <reference path="tsd.d.ts" />

import ConfigModule = require("./components/config/ConfigModule");

import { MainController } from './main/main.controller';
import {DialogController} from "./main/dialogController";


declare var moment: moment.MomentStatic;

module seanArtProject {
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
    .controller(MainController.controllerName, MainController)
    .controller(DialogController.controllerName, DialogController)
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
            .accentPalette('red');
      });
}
