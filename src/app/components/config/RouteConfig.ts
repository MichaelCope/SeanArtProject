/// <reference path="../../tsd.d.ts" />
import {MainController} from '../../main/main.controller';
class RouteConfiguration {
  public static $inject = ["$stateProvider", "$urlRouterProvider"];

  constructor(stateProvider:ng.ui.IStateProvider, urlRouterProvider:ng.ui.IUrlRouterProvider) {

    stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: MainController.controllerName,
        controllerAs: MainController.controllerAs
      });

    urlRouterProvider.otherwise('/');
  }
}

export = RouteConfiguration;
