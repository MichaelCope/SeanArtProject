/// <reference path="../../tsd.d.ts" />

class RouteConfiguration {
  public static $inject = ["$stateProvider", "$urlRouterProvider"];

  constructor(stateProvider:ng.ui.IStateProvider, urlRouterProvider:ng.ui.IUrlRouterProvider) {

    stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    urlRouterProvider.otherwise('/');
  }
}

export = RouteConfiguration;
