'use strict';

angular.module('blogApp')
  .controller('PostsCreateCtrl', function ($scope, $http) {
    $scope.create = function() {
      $http.post('/api/posts',$scope.post);
    };
  });
