'use strict';

describe('Controller: PostsReadCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));
  beforeEach(module('socketMock'));

  var PostsReadCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsReadCtrl = $controller('PostsReadCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
