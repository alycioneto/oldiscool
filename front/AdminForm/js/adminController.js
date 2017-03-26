var app = angular.module('dynamicFormApp', [])

app.controller('FormCtrl', function($scope, $http) {
  var users = [
      {
        name: 'admin',
        email: 'admin'
      }
  ];
  $scope.submitFormulario = function(){
      $http({ method: "POST", url: "/index.html", data:   users, cache: false };
  }

  $scope.formDataTwo = {};
  $scope.formDataTwo.users = users;

});
