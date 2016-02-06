'use strict';

/**
 * @ngdoc overview
 * @name faceApp
 * @description
 * # faceApp
 *
 * Main module of the application.
 */
angular
  .module('faceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/expertise', {
        templateUrl: 'views/expertise.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/writings', {
        templateUrl: 'views/writings.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    $rootScope.navigation = function( hash ) {
      if(window.location.hash === ('#/' + hash)){
        return 'active';
      }
    };
  });
