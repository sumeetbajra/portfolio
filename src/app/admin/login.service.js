
angular
  .module('portfolio')
  .service('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService($http) {

    this.checkLogin = function(username, password) {
      return $http({
        'method': 'POST',
        'url': 'http://localhost:8080/users/login',
        'data': {username: username, password: password},
      });
    }

  }
