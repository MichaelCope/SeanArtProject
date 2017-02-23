/// <reference path="../tsd.d.ts" />

import IArtProject  from '../models/IArtProject';
import IDrawing     from '../models/IDrawing';
import {DialogController} from "./dialogController";

/*
This is a test
 */

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
        //'$mdSidenav',
        '$mdToast',
        '$mdDialog',
        '$mdMedia',
        '$mdBottomSheet'];


    constructor(private $scope:ng.IScope,
                private $log:ng.ILogService,
                private $http:ng.IHttpService,
                private $timeout:ng.ITimeoutService,
                //private $mdSidenav: ng.material.ISidenavService,
                private $mdToast: ng.material.IToastService,
                private $mdDialog: ng.material.IDialogService,
                private $mdMedia: ng.material.IMedia,
                private $mdBottomSheet: ng.material.IBottomSheetService) {

        this.artProjects = this.populateArtProjects();

        this.$log.debug('constructed, test');
    }

    public selectProject(project: IArtProject): void {
        console.log(project);
        this.selectedProject = project;
    }

    //public toggleSideNav() : void {
    //    this.$mdSidenav('left').toggle();
    //}

    public expandDrawing($event, drawing: IDrawing): void{
        var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));

        this.$mdDialog.show({
            templateUrl: 'app/views/expandedDrawing.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            locals: { drawing: drawing },
            controller: DialogController,
            controllerAs: DialogController.controllerAs,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
        });
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
        result.push(new IArtProject(id, name, path + avatar, date, desc, [new IDrawing(path + "14.jpg", "Styling"), new IDrawing(path + "15.jpg", "Taken Apart"), new IDrawing(path + "16.jpg", "Finished Pieces")]));
        //shoes
        id = 2;
        name = "Sneaker Design";
        date = new Date("3/1/16");
        desc = "Design a sneaker influenced by Dieter Rams.";
        path = "/assets/drawings/shoes/";
        avatar = "shoeAvi.png";
        result.push(new IArtProject(id, name, path + avatar, date, desc, [new IDrawing(path + "shoe1.jpg", "View 1"), new IDrawing(path + "shoe2.jpg", "View 2"), new IDrawing(path + "shoe3.jpg", "View 3")]));
        //art supplies
        //Verve Markers - Winter 2015 - Design a more intuitive marker experience.
        id = 2;
        name = "Verve Markers";
        date = new Date("11/12/15");
        desc = "Design a more intuitive marker experience.";
        path = "/assets/drawings/markers/";
        avatar = "markerAvi.png";
        result.push(new IArtProject(id, name, path + avatar, date, desc, [new IDrawing(path + "2.jpg", "Color Varieties"), new IDrawing(path + "3.jpg", "Features"), new IDrawing(path + "4.jpg", "Mock Ups"), new IDrawing(path + "5.jpg", "Renderings")]));
        //misc

        return result;
    }


}
