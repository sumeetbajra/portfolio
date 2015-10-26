
angular
  .module('portfolio')
  .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http) {
    return {
      addPost: function(postData) {
        return $http({
          'method': 'POST',
          'url': 'http://localhost:8080/post/add',
          'data': postData
        });
      },
      updatePost: function(postData) {
        return $http({
          'method': 'POST',
          'url': 'http://localhost:8080/post/update',
          'data': postData
        });
      },
      deletePost: function(id) {
        return $http({
          'method': 'GET',
          'url': 'http://localhost:8080/post/delete/' + id
        });
      },
      findOne: function(slug) {
        return $http({
          'method': 'GET',
          'url': 'http://localhost:8080/post/findOne/' + slug,
        });
      },
      findAll: function() {
        return $http({
          'method': 'GET',
          'url': 'http://localhost:8080/post/findAll'
        });
      },
    }
  }
