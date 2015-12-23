/// <reference path="tsd.d.ts" />

import ConfigModule = require("./components/config/ConfigModule");

import { MainController } from './main/main.controller';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';


declare var malarkey: any;
declare var moment: moment.MomentStatic;

module seanArtProject {
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
    //.run(runBlock)
    .controller('MainController', MainController)
    .directive('acmeNavbar', acmeNavbar)
}
