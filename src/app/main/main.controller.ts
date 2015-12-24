/// <reference path="../tsd.d.ts" />

import DrawingCard from './DrawingCard';


export class MainController {
  public classAnimation: string;
  public creationDate: number;


  private mainDrawings: DrawingCard[] = [];

  public static controllerName = "MainController";
  public static controllerAs = "mainCtrl";

  public static $inject = ['$scope', '$log', '$http', '$timeout'];



  constructor (private $scope: ng.IScope, private $log: ng.ILogService, private $http: ng.IHttpService, private $timeout: ng.ITimeoutService) {

    //this.$log = this.$log.getInstance("main.controller");

    // todo: build drawing save/retrieve service;
    this.mainDrawings.push(new DrawingCard('drummond.jpg',new Date(),'Andre Drummond',
      'A digital painting of the Detroit Pistons center. Andre retweeted it on his twitter account.'));
    this.mainDrawings.push(new DrawingCard('groot.jpg', new Date(),'Groot','I am Groot! (from Guardians of the Galaxy.'));
    this.mainDrawings.push(new DrawingCard('insta.jpg', new Date(),'InstaSean','A preview of some instagram photos. Follow me!'));
    this.mainDrawings.push(new DrawingCard('rey.jpg', new Date(),'Rey','Painting of Rey from Star Wars The Force Awakenings.'));
    this.mainDrawings.push(new DrawingCard('baby.jpg', new Date(),'Baby Sean','Sean as a baby'));
    this.mainDrawings.push(new DrawingCard('Dogs-with-human-eyebrows.jpg', new Date(),'Dog','A dog with human eyebrows.'));

    this.classAnimation = '';
    this.creationDate = 1450810957689;

    this.$log.debug('constructed');
  }


}
