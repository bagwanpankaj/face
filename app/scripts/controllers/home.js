'use strict';

/**
 * @ngdoc function
 * @name faceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the faceApp
 */
angular.module('faceApp')
  .controller('HomeController', function ( $scope ) {
    $scope.store = {};
    $scope.store.author = {
      name: 'Pankaj Bagwan',
      github: 'https://github.com/bagwanpankaj',
      twitter: 'http://twitter.com/bagwanpankaj',
      blog: 'http://blog.bagwanpankaj.com/',
      gems: 'http://rubygems.org/profiles/bagwanpankaj',
      linkedin: 'http://www.linkedin.com/in/bagwanpankaj'
    };
    $scope.store.copyright = '2009-2016';
    $scope.store.tagline = 'Technology Evangelist | Data Scientist | Certified Ethical Hacker® | Certified ScrumMaster® | OpenSource Author/Contributor | Karmayogi';
    $scope.store.brief = 'A Computer Scientist by heart, and open source author/contributor. Advocates Karma. Love working with cutting edge, fascinating, open source technologies.';

    $scope.store.portfolio = [
      { gsource: '/zipper', title: 'Zipper', description: 'A MultiService Url Shortener package using Golang' },
      { gsource: '/web_share', title: 'WebShare', description: 'CDN server using Cowboy with Elixir on Erlang VM.' },
      { gsource: '/humongous', title: 'Humongous', description: 'An standalone Mongo Browser for Ruby, using HTML5. Just run and forget.' },
      { gsource: '/shortly', title: 'Shortly', description: 'A Ruby wrapper for various url shortener services' },
      { gsource: '/Avataree', title: 'Avataree', description: 'Ruby DSL for Gravatar profile and images' },
      { gsource: '/active_diigo', title: 'ActiveDiigo', description: 'Diigo Restful API wrapper; much like ActiveRecord' },
      { gsource: '/flash_player_helper', title: 'FlashPlayerHelper', description: 'Helper wrapper for JW Flash Player and Image Rotator' },
      { gsource: '/silverlight_player_helper', title: 'SilverLightPlayerHelper', description: 'A Rails Plugin to provide view helper for JW SIlverlight player' }
    ];
    $scope.store.domains = [
      'E-Commerce',
      'e-Learning Solution',
      'Payroll Management Solution',
      'Content Management System (CMS)',
      'Enterprise Risk Management (ERM)',
      'Native and Hybrid Mobile Applications',
      'Enterprise Resource Planning (ERP)',
      'Electronic Health record',
      'Search Engine/Crawling',
      'Social Media'
    ];
  } );
