'use strict';

describe('Controller: PostsDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var PostsDeleteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsDeleteCtrl = $controller('PostsDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
