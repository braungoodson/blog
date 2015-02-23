'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/posts?d=true',
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsCtrl'
      });
  })
  .run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }])
;
