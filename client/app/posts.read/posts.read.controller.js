'use strict';

angular.module('blogApp')
  .controller('PostsReadCtrl', function ($scope, $http, socket) {
    $scope.posts = [];
    $http.get('/api/posts')
      .success(function(posts){
        $scope.posts = posts;
        socket.syncUpdates('post',$scope.posts);
      })
      .error(function(error){
        $scope.error = error;
        throw new Error(error);
      })
    ;
    $scope.$on('$destroy',function(){
      socket.unsyncUpdates('post');
    });
  });
