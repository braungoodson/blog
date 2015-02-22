'use strict';

describe('Controller: PostsCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var PostsCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsCreateCtrl = $controller('PostsCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
