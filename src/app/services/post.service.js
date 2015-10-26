
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
      findAll: function() {
        return $http({
          'method': 'GET',
          'url': 'http://localhost:8080/post/findAll',
        });
      },
    }
  }
