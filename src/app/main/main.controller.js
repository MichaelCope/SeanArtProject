/// <reference path="../tsd.d.ts" />
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
        this.mainDrawings = [];
        this.$log.debug('constructed');
    }
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