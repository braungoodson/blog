'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts.create', {
        url: '/posts/create',
        templateUrl: 'app/posts.create/posts.create.html',
        controller: 'PostsCreateCtrl'
      });
  });