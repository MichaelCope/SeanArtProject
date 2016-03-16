/// <reference path="../tsd.d.ts" />

import DrawingCard from './DrawingCard';
import IArtProject from '../models/IArtProject'

export class MainController {
    public classAnimation:string;
    public creationDate:number;


    private mainDrawings:DrawingCard[] = [];

    public static controllerName = "MainController";
    public static controllerAs = "mainCtrl";

    public static $inject = [
        '$scope',
        '$log',
        '$http',
        '$timeout',
        '$mdSidenav',
        '$mdToast',
        '$mdDialog',
        '$mdMedia',
        '$mdBottomSheet'];


    constructor(private $scope:ng.IScope,
                private $log:ng.ILogService,
                private $http:ng.IHttpService,
                private $timeout:ng.ITimeoutService,
                private $mdSidenav: ng.material.ISidenavService,
                private $mdToast: ng.material.IToastService,
                private $mdDialog: ng.material.IDialogService,
                private $mdBottomSheet: ng.material.IBottomSheetService) {

        this.$log.debug('constructed');
    }


}
