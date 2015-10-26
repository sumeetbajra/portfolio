
angular
  .module('portfolio')
  .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService($http) {

    return {
      checkLogin: function(username, password) {
        return $http({
          'method': 'POST',
          'url': 'http://localhost:8080/users/login',
          'data': {username: username, password: password}
        });
      }      
    }
  }
