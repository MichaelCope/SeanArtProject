/// <reference path="../tsd.d.ts" />
var IArtProject_1 = require('../models/IArtProject');
var MainController = (function () {
    function MainController($scope, $log, $http, $timeout, $mdSidenav, $mdToast, $mdDialog, $mdBottomSheet) {
        this.$scope = $scope;
        this.$log = $log;
        this.$http = $http;
        this.$timeout = $timeout;
        this.$mdSidenav = $mdSidenav;
        this.$mdToast = $mdToast;
        this.$mdDialog = $mdDialog;
        this.$mdBottomSheet = $mdBottomSheet;
        this.artProjects = this.populateArtProjects();
        this.$log.debug('constructed');
    }
    MainController.prototype.populateArtProjects = function () {
        var result = [];
        //utility knife
        var id = 1;
        var name = "Tekton Utility Knife";
        var date = new Date("10/24/15");
        var desc = "Design a knife that improves the package opening experience.";
        var path = "/assets/drawings/utilityknife/";
        var avatar = "knifeAvatar.png";
        result.push(new IArtProject_1.default(id, name, path + avatar, date, desc, [path + "14.jpg", path + "15.jpg", path + "16.jpg"]));
        //shoes
        id = 2;
        name = "Sneaker Design";
        date = new Date("3/1/16");
        desc = "Design a sneaker influenced by Dieter Rams.";
        path = "/assets/drawings/shoes/";
        avatar = "shoeAvi.png";
        result.push(new IArtProject_1.default(id, name, path + avatar, date, desc, [path + "shoe1.jpg", path + "shoe2.jpg", path + "shoe3.jpg"]));
        //art supplies
        //Verve Markers - Winter 2015 - Design a more intuitive marker experience.
        id = 2;
        name = "Verve Markers";
        date = new Date("11/12/15");
        desc = "Design a more intuitive marker experience.";
        path = "/assets/drawings/markers/";
        avatar = "markerAvi.png";
        result.push(new IArtProject_1.default(id, name, path + avatar, date, desc, [path + "2.jpg", path + "3.jpg", path + "4.jpg", path + "5.jpg"]));
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