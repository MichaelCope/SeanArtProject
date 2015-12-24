/// <reference path="../tsd.d.ts" />
var DrawingCard_1 = require('./DrawingCard');
var MainController = (function () {
    function MainController($scope, $log, $http, $timeout) {
        //this.$log = this.$log.getInstance("main.controller");
        this.$scope = $scope;
        this.$log = $log;
        this.$http = $http;
        this.$timeout = $timeout;
        this.mainDrawings = [];
        // todo: build drawing save/retrieve service;
        this.mainDrawings.push(new DrawingCard_1.default('drummond.jpg', new Date(), 'Andre Drummond', 'A digital painting of the Detroit Pistons center. Andre retweeted it on his twitter account.'));
        this.mainDrawings.push(new DrawingCard_1.default('groot.jpg', new Date(), 'Groot', 'I am Groot! (from Guardians of the Galaxy.'));
        this.mainDrawings.push(new DrawingCard_1.default('insta.jpg', new Date(), 'InstaSean', 'A preview of some instagram photos. Follow me!'));
        this.mainDrawings.push(new DrawingCard_1.default('rey.jpg', new Date(), 'Rey', 'Painting of Rey from Star Wars The Force Awakenings.'));
        this.mainDrawings.push(new DrawingCard_1.default('baby.jpg', new Date(), 'Baby Sean', 'Sean as a baby'));
        this.mainDrawings.push(new DrawingCard_1.default('Dogs-with-human-eyebrows.jpg', new Date(), 'Dog', 'A dog with human eyebrows.'));
        this.classAnimation = '';
        this.creationDate = 1450810957689;
        this.$log.debug('constructed');
    }
    MainController.controllerName = "MainController";
    MainController.controllerAs = "mainCtrl";
    MainController.$inject = ['$scope', '$log', '$http', '$timeout'];
    return MainController;
})();
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map