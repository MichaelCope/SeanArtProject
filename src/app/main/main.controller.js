/// <reference path="../tsd.d.ts" />
var IArtProject_1 = require('../models/IArtProject');
var IDrawing_1 = require('../models/IDrawing');
var dialogController_1 = require("./dialogController");
var MainController = (function () {
    function MainController($scope, $log, $http, $timeout, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
        this.$scope = $scope;
        this.$log = $log;
        this.$http = $http;
        this.$timeout = $timeout;
        this.$mdSidenav = $mdSidenav;
        this.$mdToast = $mdToast;
        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
        this.$mdBottomSheet = $mdBottomSheet;
        this.selectedProject = null;
        this.searchText = "";
        this.artProjects = this.populateArtProjects();
        this.$log.debug('constructed');
    }
    MainController.prototype.selectProject = function (project) {
        console.log(project);
        this.selectedProject = project;
    };
    MainController.prototype.toggleSideNav = function () {
        this.$mdSidenav('left').toggle();
    };
    MainController.prototype.expandDrawing = function ($event, drawing) {
        var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
        this.$mdDialog.show({
            templateUrl: '../../app/views/expandedDrawing.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            locals: { drawing: drawing },
            controller: dialogController_1.DialogController,
            controllerAs: dialogController_1.DialogController.controllerAs,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        });
    };
    MainController.prototype.populateArtProjects = function () {
        var result = [];
        //utility knife
        var id = 1;
        var name = "Tekton Utility Knife";
        var date = new Date("10/24/15");
        var desc = "Design a knife that improves the package opening experience.";
        var path = "/assets/drawings/utilityknife/";
        var avatar = "knifeAvatar.png";
        result.push(new IArtProject_1.default(id, name, path + avatar, date, desc, [new IDrawing_1.default(path + "14.jpg", "Styling"), new IDrawing_1.default(path + "15.jpg", "Taken Apart"), new IDrawing_1.default(path + "16.jpg", "Finished Pieces")]));
        //shoes
        id = 2;
        name = "Sneaker Design";
        date = new Date("3/1/16");
        desc = "Design a sneaker influenced by Dieter Rams.";
        path = "/assets/drawings/shoes/";
        avatar = "shoeAvi.png";
        result.push(new IArtProject_1.default(id, name, path + avatar, date, desc, [new IDrawing_1.default(path + "shoe1.jpg", "View 1"), new IDrawing_1.default(path + "shoe2.jpg", "View 2"), new IDrawing_1.default(path + "shoe3.jpg", "View 3")]));
        //art supplies
        //Verve Markers - Winter 2015 - Design a more intuitive marker experience.
        id = 2;
        name = "Verve Markers";
        date = new Date("11/12/15");
        desc = "Design a more intuitive marker experience.";
        path = "/assets/drawings/markers/";
        avatar = "markerAvi.png";
        result.push(new IArtProject_1.default(id, name, path + avatar, date, desc, [new IDrawing_1.default(path + "2.jpg", "Color Varieties"), new IDrawing_1.default(path + "3.jpg", "Features"), new IDrawing_1.default(path + "4.jpg", "Mock Ups"), new IDrawing_1.default(path + "5.jpg", "Renderings")]));
        //misc
        return result;
    };
    MainController.controllerName = "MainController";
    MainController.controllerAs = "mainCtrl";
    MainController.$inject = [
        '$scope',
        '$log',
        '$http',
        '$timeout',
        '$mdSidenav',
        '$mdToast',
        '$mdDialog',
        '$mdMedia',
        '$mdBottomSheet'];
    return MainController;
})();
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map