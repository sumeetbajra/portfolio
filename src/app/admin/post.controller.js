
angular
  .module('portfolio')
  .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'toastr', 'PostService', 'Slug', 'ngDialog'];

  function PostController($scope, $rootScope, $state, $stateParams, toastr, PostService, Slug, ngDialog) {

    var vm = this;

    vm.findOne = function() {
      PostService.findOne($stateParams.slug).then(function(data) {
        vm.postData = data.data;
      });
    }

    vm.findAll = function() {
      PostService.findAll().then(function(data) {
        vm.posts = data.data;
      });
    }

    vm.addPost = function(postData) {
      if(postData.title.length > 0 && postData.content.length > 0){
        postData.slug = Slug.slugify(postData.title);
        PostService.addPost(postData).then(function(data) {
          toastr.success('The post has been created successfully.');
          $state.go('adminDashboard');
        });
      }
    }

    vm.updatePost = function(postData) {
      if(postData.title.length > 0 && postData.content.length > 0){

            postData.slug = Slug.slugify(postData.title);
        PostService.updatePost(postData).then(function(data) {
          toastr.success('The post has been updated successfully.');
          $state.go('adminDashboard');
        });
      }
    }

    vm.deletePost = function(id) {
      //ngDialog.open({ template: 'templateId' });
      PostService.deletePost(id).then(function(data) {
        if (data.data.status){
          toastr.success('The post has been deleted successfully.');
          vm.findAll();
        }
      });
    }
  }
