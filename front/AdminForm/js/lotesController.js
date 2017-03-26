var app = angular.module('dynamicFormApp', [])

app.controller('LotesCtrl', function($scope, $http) {
  var lotes = [
      {
        name: '',
        price: '',
        totalAmount: '',
        bought: ''
      },
      {
        name: '',
        price: '',
        totalAmount: '',
        bought: ''
      },
      {
        name: '',
        price: '',
        totalAmount: '',
        bought: ''
      },
      {
        name: '',
        price: '',
        totalAumount: '',
        bought: ''
      },
  ];
  function submitFormulario(){
        $http({ method: "POST", url: "/index", data:   users, cache: false });
  }

  $scope.formDataTwo = {};
  $scope.formDataTwo.lotes = lotes;

});
