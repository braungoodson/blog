'use strict';

angular.module('blogApp')
  .controller('PostsDeleteCtrl', function ($scope, $http) {
    $scope.delete = function(post) {
      $http.delete('/api/posts/'+post._id);
    };
  });
