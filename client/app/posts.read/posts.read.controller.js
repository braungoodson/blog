'use strict';

angular.module('blogApp')
  .controller('PostsReadCtrl', function ($scope, $http, socket, $stateParams) {
    $scope.posts = [];
    $http.get('/api/posts',$stateParams)
      .success(function(posts){
        posts.reverse();
        $scope.posts = posts;
        socket.syncUpdates('post',$scope.posts);
        for (var i = 0; i < $scope.posts.length; i++) {
          getAuthor($scope.posts[i]);
          var date = new Date($scope.posts[i].dob);
          switch (date.getMonth()) {
            case 0: date.month = 'Jan'; break;
            case 1: date.month = 'Feb'; break;
          }
          $scope.posts[i].dob = date.month + ' ' + date.getDate() + ', ' + date.getFullYear();
        }
      })
      .error(function(error){
        $scope.error = error;
        throw new Error(error);
      })
    ;
    $scope.$on('$destroy',function(){
      socket.unsyncUpdates('post');
    });
    function getAuthor(post) {
      $http.get('/api/users/public/'+post.author)
        .success(function(author){
          post.author = author;
        })
        .error(function(error){
          post.author = {
            name: 'Unknown'
          };
          $scope.error = error;
          console.warn(error);
        })
      ;
    }
  });
