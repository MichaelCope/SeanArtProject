/// <reference path="../tsd.d.ts" />
var DialogController = (function () {
    function DialogController($scope, $mdDialog, drawing) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.drawing = drawing;
        this._drawing = drawing;
    }
    DialogController.prototype.cancel = function () {
        this.$mdDialog.cancel();
    };
    DialogController.controllerName = "DialogController";
    DialogController.controllerAs = "dgCtrl";
    DialogController.$inject = ['$scope', '$mdDialog', 'drawing'];
    return DialogController;
})();
exports.DialogController = DialogController;
//# sourceMappingURL=dialogController.js.map