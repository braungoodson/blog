'use strict';

angular.module('blogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts.read.delete', {
        url: '/delete',
        templateUrl: 'app/posts.delete/posts.delete.html',
        controller: 'PostsDeleteCtrl'
      });
  });
