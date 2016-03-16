/// <reference path="../tsd.d.ts" />

import DrawingCard from './DrawingCard';
import IArtProject from '../models/IArtProject'

export class MainController {
    public classAnimation:string;
    public creationDate:number;


    //private mainDrawings:DrawingCard[] = [];
    private artProjects: IArtProject[];

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

        this.artProjects = this.populateArtProjects();

        this.$log.debug('constructed');
    }

    private populateArtProjects(): IArtProject[] {
        let result: IArtProject[] = [];
        //utility knife
        let id:number = 1;
        let name:string = "Tekton Utility Knife";
        let date:Date = new Date("10/24/15");
        let desc:string = "Design a knife that improves the package opening experience.";
        let path:string =  "/assets/drawings/utilityknife/";
        let avatar:string = "knifeAvatar.png";
        result.push(new IArtProject(id, name, path + avatar, date, desc, [path + "14.jpg", path + "15.jpg", path + "16.jpg"]));
        //shoes

        //art supplies

        //misc

        return result;
    }


}
