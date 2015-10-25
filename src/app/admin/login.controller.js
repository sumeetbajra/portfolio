
angular
  .module('portfolio')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$rootScope', '$state', 'LoginService'];

  function LoginController ($scope, $rootScope, $state, LoginService) {

    $scope.loginError = false;

    this.login = function (loginData) {
      LoginService.checkLogin(loginData.username, loginData.password).then(function(data) {
        if(data.data.status) {
          $rootScope.username = loginData.username;
          $state.go('adminDashboard');
        }else{
          $scope.loginError = true;
        }
      });

    }


  }
