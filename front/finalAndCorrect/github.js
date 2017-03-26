(function(){
  angular.module("saoVicentinoApp")
  .factory('github', ['$http', function githubFactory($http) {
     var getUser = function(){
       return $http.get("http://localhost/course1/finalAndCorrect/json")
     };
    return{ //what i return will represent the public api
      getUser: getUser
    };
  }]);

}());