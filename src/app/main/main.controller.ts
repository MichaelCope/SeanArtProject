/// <reference path="../tsd.d.ts" />

import DrawingCard from './DrawingCard';
import IArtProject from '../models/IArtProject'

export class MainController {

    public static controllerName = "MainController";
    public static controllerAs = "mainCtrl";

    //public classAnimation:string;
    //public creationDate:number;


    //private mainDrawings:DrawingCard[] = [];
    public artProjects: IArtProject[];
    public selectedProject: IArtProject = null;
    public searchText: string = "";



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

    public selectProject(project: IArtProject): void {
        console.log(project);
        this.selectedProject = project;
    }

    public toggleSideNav() : void {
        this.$mdSidenav('left').toggle();
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
        id = 2;
        name = "Sneaker Design";
        date = new Date("3/1/16");
        desc = "Design a sneaker influenced by Dieter Rams.";
        path = "/assets/drawings/shoes/";
        avatar = "shoeAvi.png";
        result.push(new IArtProject(id, name, path + avatar, date, desc, [path + "shoe1.jpg", path + "shoe2.jpg", path + "shoe3.jpg"]));
        //art supplies
        //Verve Markers - Winter 2015 - Design a more intuitive marker experience.
        id = 2;
        name = "Verve Markers";
        date = new Date("11/12/15");
        desc = "Design a more intuitive marker experience.";
        path = "/assets/drawings/markers/";
        avatar = "markerAvi.png";
        result.push(new IArtProject(id, name, path + avatar, date, desc, [path + "2.jpg", path + "3.jpg", path + "4.jpg", path + "5.jpg"]));
        //misc

        return result;
    }


}
