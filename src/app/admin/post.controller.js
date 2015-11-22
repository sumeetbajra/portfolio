
angular
  .module('portfolio')
  .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'toastr', 'PostService', 'Slug', 'ngDialog', 'Upload', 'SERVICE_URL'];

  function PostController($scope, $rootScope, $state, $stateParams, toastr, PostService, Slug, ngDialog, Upload, SERVICE_URL) {

    var vm = this;

    $rootScope.serviceUrl = SERVICE_URL

    vm.findOne = function($slug) {
          if($slug == undefined) {
                $slug = $stateParams.slug;
          }
      PostService.findOne($slug).then(function(data) {
        vm.postData = data.data;
      });
   }

    vm.findAll = function() {
      PostService.findAll().then(function(data) {
        vm.posts = data.data;
      });
    }

    vm.addPost = function(postData) {
      if (postData.featured) {
            Upload.rename(postData.featured, Date.now() + '.' + postData.featured.name.split('.')[1]);
      }
      console.log(postData);
      if(postData.title.length > 0 && postData.content.length > 0){
        postData.slug = Slug.slugify(postData.title);
        PostService.addPost(postData).then(function(data) {
          toastr.success('The post has been created successfully.');
          $state.go('adminDashboard');
        });
      }
    }

    vm.updatePost = function(post) {
          postData = post.postData;
    if (post.featuredLink) {
          postData.featuredLink = post.featuredLink;
         //Upload.rename(postData.featured, Date.now() + '.' + postData.featured.name.split('.')[1]);
    }
      if(postData.title.length > 0 && postData.content.length > 0){
            postData.slug = Slug.slugify(postData.title);
            console.log(postData);
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
