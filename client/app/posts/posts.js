'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/',
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsCtrl'
      });
  });
