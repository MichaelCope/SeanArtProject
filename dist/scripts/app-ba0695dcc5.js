/******/!function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return t[a].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var a,o=n(1),i=n(3),r=n(6);!function(t){"use strict";angular.module("seanArtProject",["ngAnimate","ngSanitize","ngResource","ui.router","ngMaterial","ngMdIcons","ngMessages","toastr",o.ModuleName]).constant("moment",moment).controller(i.MainController.controllerName,i.MainController).controller(r.DialogController.controllerName,r.DialogController).config(["$mdIconProvider","$mdThemingProvider",function(t,e){t.defaultIconSet("./assets/svg/avatars.svg",128).icon("google_plus","./assets/svg/google_plus.svg",512).icon("hangouts","./assets/svg/hangouts.svg",512).icon("twitter","./assets/svg/twitter.svg",512).icon("phone","./assets/svg/phone.svg",512).icon("menu","./assets/svg/menu.svg",24),e.theme("default").primaryPalette("light-blue").accentPalette("red")}])}(a||(a={}))},function(t,e,n){var a=n(2);e.ModuleName="Components.Config",angular.module(e.ModuleName,[]).config(a).config(["$mdIconProvider","$mdThemingProvider",function(t,e){t.defaultIconSet("./assets/svg/avatars.svg",128).icon("google_plus","./assets/svg/google_plus.svg",512).icon("hangouts","./assets/svg/hangouts.svg",512).icon("twitter","./assets/svg/twitter.svg",512).icon("phone","./assets/svg/phone.svg",512).icon("menu","./assets/svg/menu.svg",24),e.theme("default").primaryPalette("light-blue").accentPalette("purple")}]).run(["$rootScope","$state",function(t,e){t.$state=e}])},function(t,e,n){var a=n(3),o=function(){function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:a.MainController.controllerName,controllerAs:a.MainController.controllerAs}),e.otherwise("/")}return t.$inject=["$stateProvider","$urlRouterProvider"],t}();t.exports=o},function(t,e,n){var a=n(4),o=n(5),i=n(6),r=function(){function t(t,e,n,a,o,i,r,l,s){this.$scope=t,this.$log=e,this.$http=n,this.$timeout=a,this.$mdSidenav=o,this.$mdToast=i,this.$mdDialog=r,this.$mdMedia=l,this.$mdBottomSheet=s,this.selectedProject=null,this.searchText="",this.artProjects=this.populateArtProjects(),this.$log.debug("constructed")}return t.prototype.selectProject=function(t){console.log(t),this.selectedProject=t},t.prototype.toggleSideNav=function(){this.$mdSidenav("left").toggle()},t.prototype.expandDrawing=function(t,e){var n=this.$mdMedia("sm")||this.$mdMedia("xs");this.$mdDialog.show({templateUrl:"app/views/expandedDrawing.html",parent:angular.element(document.body),targetEvent:t,locals:{drawing:e},controller:i.DialogController,controllerAs:i.DialogController.controllerAs,clickOutsideToClose:!0,fullscreen:n})},t.prototype.populateArtProjects=function(){var t=[],e=1,n="Tekton Utility Knife",i=new Date("10/24/15"),r="Design a knife that improves the package opening experience.",l="/assets/drawings/utilityknife/",s="knifeAvatar.png";return t.push(new a["default"](e,n,l+s,i,r,[new o["default"](l+"14.jpg","Styling"),new o["default"](l+"15.jpg","Taken Apart"),new o["default"](l+"16.jpg","Finished Pieces")])),e=2,n="Sneaker Design",i=new Date("3/1/16"),r="Design a sneaker influenced by Dieter Rams.",l="/assets/drawings/shoes/",s="shoeAvi.png",t.push(new a["default"](e,n,l+s,i,r,[new o["default"](l+"shoe1.jpg","View 1"),new o["default"](l+"shoe2.jpg","View 2"),new o["default"](l+"shoe3.jpg","View 3")])),e=2,n="Verve Markers",i=new Date("11/12/15"),r="Design a more intuitive marker experience.",l="/assets/drawings/markers/",s="markerAvi.png",t.push(new a["default"](e,n,l+s,i,r,[new o["default"](l+"2.jpg","Color Varieties"),new o["default"](l+"3.jpg","Features"),new o["default"](l+"4.jpg","Mock Ups"),new o["default"](l+"5.jpg","Renderings")])),t},t.controllerName="MainController",t.controllerAs="mainCtrl",t.$inject=["$scope","$log","$http","$timeout","$mdSidenav","$mdToast","$mdDialog","$mdMedia","$mdBottomSheet"],t}();e.MainController=r},function(t,e){var n=function(){function t(t,e,n,a,o,i){this.projectId=t,this.projectName=e,this.avatarUrl=n,this.createDate=a,this.description=o,this.drawings=i}return t}();e["default"]=n},function(t,e){var n=function(){function t(t,e,n){this.url=t,this.title=e,this.blurb=n}return t}();e["default"]=n},function(t,e){var n=function(){function t(t,e,n){this.$scope=t,this.$mdDialog=e,this.drawing=n,this._drawing=n}return t.prototype.cancel=function(){this.$mdDialog.cancel()},t.controllerName="DialogController",t.controllerAs="dgCtrl",t.$inject=["$scope","$mdDialog","drawing"],t}();e.DialogController=n}]),angular.module("seanArtProject").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="row" style="min-height: 800px"><div ng-include="\'app/views/sidenav.html\'" layout="vertical"></div><div layout="column" flex="" id="wrapper"><div ng-include="\'app/views/toolbar-header.html\'"></div><md-content flex="" id="content"><div ng-include="\'app/views/main-content.html\'"></div></md-content></div></div>'),t.put("app/views/expandedDrawing.html",'<md-dialog style="max-width: 90%; max-height: 90%;"><md-dialog-content style="max-width: 100%; max-height: 100%;"><img src="{{dgCtrl._drawing.url}}" style="padding: 5px; max-width: 75%; max-height: inherit; width: auto; height: auto;"></md-dialog-content><md-dialog-actions layout="row"><md-button ng-click="dgCtrl.cancel()">Close</md-button></md-dialog-actions></md-dialog>'),t.put("app/views/main-content.html",'<md-content><div ng-if="!mainCtrl.selectedProject"><h2>Please select a project</h2></div><h2>{{mainCtrl.selectedProject.projectName}}</h2></md-content><img class="avatar" ng-src="{{mainCtrl.selectedProject.avatarUrl}}"><h2>{{mainCtrl.selectedProject.createDate | date: \'MMMM, yyyy\'}}</h2><p ng-if="mainCtrl.selectedProject.drawings.length < 1">No drawings for {{mainCtrl.selectedProject.projectName}}, yet.</p><md-content class="md-padding" layout-xs="column" layout="row" layout-wrap=""><md-card ng-repeat="drawing in mainCtrl.selectedProject.drawings"><md-card-content><h3>{{drawing.title}}</h3><img ng-src="{{drawing.url}}" class="avatar-large md-card-image"></md-card-content><md-card-actions layout="row" layout-align="end center"><md-button ng-click="mainCtrl.expandDrawing($event, drawing)">Enlarge</md-button></md-card-actions></md-card></md-content>'),t.put("app/views/sidenav.html",'<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-sm\')"><md-toolbar><h1>Projects</h1></md-toolbar><div layout-padding=""><md-autocomplete md-search-text="mainCtrl.searchText" md-items="item in mainCtrl.artProjects | filter:mainCtrl.searchText" md-item-text="item.projectName" md-min-length="2" placeholder="filter"><md-item-template><span md-highlight-text="mainCtrl.searchText" md-highlight-flags="^i">{{item.projectName}}</span></md-item-template><md-not-found>No user matching "{{mainCtrl.searchText}}" were found.</md-not-found></md-autocomplete></div><md-content class="scrollable-nav-content"><md-list><md-list-item ng-repeat="project in mainCtrl.artProjects | orderBy:\'id\' | filter:mainCtrl.searchText"><md-button ng-click="mainCtrl.selectProject(project)" ng-class="{\'selected\': user === mainCtrl.selectedProject }"><img ng-src="{{project.avatarUrl}}" class="avatar avatar-small"> {{project.projectName}}</md-button></md-list-item></md-list></md-content></md-sidenav>'),t.put("app/views/toolbar-header.html",'<md-toolbar><div class="md-toolbar-tools"><md-button hide-gt-sm="" ng-click="mainCtrl.toggleSideNav()" class="md-icon-button"><md-icon md-svg-icon="menu"></md-icon></md-button><h1>Sean Cope Art</h1><md-fab-speed-dial md-direction="down" class="md-fling md-fab-top-right"><md-fab-trigger><md-button class="md-fab"><md-icon md-svg-icon="menu"></md-icon></md-button></md-fab-trigger><md-fab-actions><md-button class="md-fab md-raised md-mini" ng-click="mainCtrl.showContactOptions($event)"><ng-md-icon icon="face"></ng-md-icon><md-tooltip md-direction="left">Contact</md-tooltip></md-button><md-button class="md-fab md-raised md-mini" ng-click="mainCtrl.clearNotes($event)"><ng-md-icon icon="clear_all"></ng-md-icon><md-tooltip md-direction="left">Clear all notes</md-tooltip></md-button></md-fab-actions></md-fab-speed-dial></div></md-toolbar>'),t.put("app/components/navbar/navbar.html",'<md-toolbar class="md-medium-tall nav-header" layout-align="center center" scroll=""><section class="md-toolbar-tools" flex="" layout="row" layout-align="right"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button><md-button class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</md-button></section></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-ba0695dcc5.js.map
