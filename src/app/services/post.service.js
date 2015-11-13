
angular
  .module('portfolio')
  .factory('PostService', PostService);

  PostService.$inject = ['$http', 'SERVICE_URL', 'Upload'];

  function PostService($http, SERVICE_URL, Upload) {
    return {
      addPost: function(postData) {
            return Upload.upload({
                  url: SERVICE_URL + '/post/add',
                  data: postData
           });
      //   return $http({
      //     'method': 'POST',
      //     'enctype': 'multipart/form-data',
      //     'url': 'http://localhost:8080' + '/post/add',
      //     'data': postData
      //   });
      },
      updatePost: function(postData) {
            return Upload.upload({
                  url: SERVICE_URL + '/post/update',
                  data: postData
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
