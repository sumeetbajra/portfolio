
angular
  .module('portfolio')
  .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$rootScope', '$state', 'PostService'];

  function PostController($scope, $rootScope, $state, PostService) {

    var vm = this;

    vm.findAll = function() {
      PostService.findAll().then(function(data) {
        vm.posts = data.data;
      });
    }

    vm.addPost = function(postData) {
      if(postData.title.length > 0 && postData.content.length > 0){
        PostService.addPost(postData).then(function(data) {
            $state.go('adminDashboard');
        });
      }
    }

    vm.deletePost = function(post) {

    }
  }
