/// <reference path="../tsd.d.ts" />

import IDrawing from "../models/IDrawing";

export class DialogController {

    public static controllerName = "DialogController";
    public static controllerAs = "dgCtrl";

    //public drawing: IDrawing;
    public _drawing: IDrawing;

    static $inject = ['$scope', '$mdDialog', 'drawing'];

    constructor(private $scope: ng.IScope, private $mdDialog: ng.material.IDialogService, private drawing: IDrawing) {
        this._drawing = drawing;
    }



    cancel(): void {
        this.$mdDialog.cancel();
    }

}