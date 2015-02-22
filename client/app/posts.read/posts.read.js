'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts.read', {
        url: '^/posts?v=',
        templateUrl: 'app/posts.read/posts.read.html',
        controller: 'PostsReadCtrl'
      });
  });
