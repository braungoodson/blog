'use strict';

angular.module('blogApp')
  .controller('PostsCtrl', function ($scope, $state) {
    $scope.message = 'Hello';
    $state.go('posts.read');
  });
