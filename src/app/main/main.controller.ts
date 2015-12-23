/// <reference path="../tsd.d.ts" />

export class MainController {
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;

  /* @ngInject */
  constructor ($timeout: ng.ITimeoutService, toastr: any) {
    this.classAnimation = '';
    this.creationDate = 1450810957689;
    this.toastr = toastr;
  }


}
