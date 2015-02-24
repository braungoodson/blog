'use strict';

angular.module('blogApp')
  .controller('PostsCreateCtrl', function ($scope, $http, Auth, $state) {
    $scope.post = {};
    $scope.create = function() {
      var error = 'You must be logged in to do that.';
      $scope.post.author = Auth.getCurrentUser()._id;
      $http.post('/api/posts',$scope.post)
        .success(function(post){
          $state.go('posts.read');
        })
        .error(function(error){
          $scope.error = error;
          throw new Error(error);
        })
      ;
    };
  });
