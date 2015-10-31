
angular
  .module('portfolio')
  .factory('PostService', PostService);

  PostService.$inject = ['$http', '$rootScope'];

  $rootScope.serviceUrl = "http://sumeetbajra.heroku.com";

  function PostService($http, $rootScope) {
    return {
      addPost: function(postData) {
        return $http({
          'method': 'POST',
          'url': $rootScope.serviceUrl + '/post/add',
          'data': postData
        });
      },
      updatePost: function(postData) {
        return $http({
          'method': 'POST',
          'url': $rootScope.serviceUrl + '/post/update',
          'data': postData
        });
      },
      deletePost: function(id) {
        return $http({
          'method': 'GET',
          'url':  $rootScope.serviceUrl + '/post/delete/' + id
        });
      },
      findOne: function(slug) {
        return $http({
          'method': 'GET',
          'url':  $rootScope.serviceUrl + '/post/findOne/' + slug,
        });
      },
      findAll: function() {
        return $http({
          'method': 'GET',
          'url':  $rootScope.serviceUrl + '/post/findAll'
        });
      },
    }
  }
