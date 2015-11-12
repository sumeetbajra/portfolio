
angular
  .module('portfolio')
  .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'toastr', 'PostService', 'Slug', 'ngDialog', 'Upload'];

  function PostController($scope, $rootScope, $state, $stateParams, toastr, PostService, Slug, ngDialog, Upload) {

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
      if (postData.featured) {
            Upload.rename(postData.featured, Date.now() + '.' + postData.featured.$ngfName.split('.')[1]);
      }
      if(postData.title.length > 0 && postData.content.length > 0){
        postData.slug = Slug.slugify(postData.title);
        PostService.addPost(postData).then(function(data) {
          toastr.success('The post has been created successfully.');
          $state.go('adminDashboard');
        });
      }
    }

    vm.upload = function(file) {
      Upload.upload({
           url: 'http://localhost:8080/post/uploadFeatured',
           data: {featured: file}
      }).then(function (resp) {
           console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
      }, function (resp) {
           console.log('Error status: ' + resp.status);
      }, function (evt) {
           var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
           console.log('progress: ' + progressPercentage + '% ' + evt.config.data.featured.name);
      });
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
