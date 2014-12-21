(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ayers/Projects/angular-browserify-seed/app/app.js":[function(require,module,exports){
var homeModule = require("./modules/home/home");
var router = require("./router");

var appModule = angular.module("App", ["ui.router", homeModule.name]);

appModule.config(router);
},{"./modules/home/home":"/Users/ayers/Projects/angular-browserify-seed/app/modules/home/home.js","./router":"/Users/ayers/Projects/angular-browserify-seed/app/router.js"}],"/Users/ayers/Projects/angular-browserify-seed/app/modules/home/home-controller.js":[function(require,module,exports){
function HomeController() {

    this.location = "Browserify!";
}

module.exports = HomeController;
},{}],"/Users/ayers/Projects/angular-browserify-seed/app/modules/home/home.js":[function(require,module,exports){
var homeModule = angular.module("Home", []);

var homeController = require("./home-controller");

homeModule.controller("HomeCtrl", homeController);

module.exports = homeModule;
},{"./home-controller":"/Users/ayers/Projects/angular-browserify-seed/app/modules/home/home-controller.js"}],"/Users/ayers/Projects/angular-browserify-seed/app/router.js":[function(require,module,exports){
function Router($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            controller : "HomeCtrl as homeCtrl",
            templateUrl: "modules/home/home.html"
        });
}

module.exports = Router;
},{}]},{},["/Users/ayers/Projects/angular-browserify-seed/app/app.js"])