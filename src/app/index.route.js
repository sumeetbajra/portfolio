(function() {
  'use strict';

  angular
    .module('portfolio')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/main/portfolio.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/main/blog.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('adminLogin', {
        url: '/admin/login',
        templateUrl: 'app/admin/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('adminDashboard', {
        url: '/admin/dashboard',
        templateUrl: 'app/admin/dashboard.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })
      ;


    $urlRouterProvider.otherwise('/');
  }

})();
