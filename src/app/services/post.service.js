
angular
  .module('portfolio')
  .factory('PostService', PostService);

  PostService.$inject = ['$http', 'SERVICE_URL'];

  function PostService($http, SERVICE_URL) {
    return {
      addPost: function(postData) {
        return $http({
          'method': 'POST',
          'url': SERVICE_URL + '/post/add',
          'data': postData
        });
      },
      updatePost: function(postData) {
        return $http({
          'method': 'POST',
          'url': SERVICE_URL + '/post/update',
          'data': postData
        });
      },
      deletePost: function(id) {
        return $http({
          'method': 'GET',
          'url': SERVICE_URL + '/post/delete/' + id
        });
      },
      findOne: function(slug) {
        return $http({
          'method': 'GET',
          'url':  SERVICE_URL + '/post/findOne/' + slug,
        });
      },
      findAll: function() {
        return $http.get(SERVICE_URL + '/post/findAll');
      },
    }
  }
