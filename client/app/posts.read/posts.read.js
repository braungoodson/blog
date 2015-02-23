'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts.read', {
        url: '/read',
        templateUrl: 'app/posts.read/posts.read.html',
        controller: 'PostsReadCtrl'
      });
  });
