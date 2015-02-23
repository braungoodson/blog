'use strict';

angular.module('blogApp')
  .controller('PostsCreateCtrl', function ($scope, $http, Auth) {
    $scope.post = {};
    $scope.create = function() {
      var error = "You must be logged in to do that.";
      if (Auth.isLoggedIn()) {
        $scope.post.author = Auth.getCurrentUser()._id;
        $http.post('/api/posts',$scope.post);
      } else {
        $scope.error = error;
        throw new Error(error);
      }
    };
  });
