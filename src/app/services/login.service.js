
angular
  .module('portfolio')
  .factory('LoginService', LoginService);

  LoginService.$inject = ['$http', 'SERVICE_URL'];

  function LoginService($http, SERVICE_URL) {

    return {
      checkLogin: function(username, password) {
        return $http({
          'method': 'POST',
          'url':  SERVICE_URL + '/users/login',
          'data': {username: username, password: password}
        });
      }
    }
  }
