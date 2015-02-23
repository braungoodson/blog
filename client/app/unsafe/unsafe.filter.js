'use strict';

angular.module('blogApp')
  .filter('unsafe', function ($sce) {
    return function (input) {
      return $sce.trustAsHtml(input);
    };
  });
