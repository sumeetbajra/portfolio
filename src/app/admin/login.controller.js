
angular
  .module('portfolio')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$rootScope', '$state', 'LoginService'];

  function LoginController ($scope, $rootScope, $state, LoginService) {

    var vm = this;
    vm.loginError = false;

    vm.login = function (loginData) {
      LoginService.checkLogin(loginData.username, loginData.password).then(function(data) {
        if(data.data.status) {
          $rootScope.userData = data.data.user;
          $state.go('adminDashboard');
        }else{
          vm.loginError = true;
        }
      });

    }


  }
