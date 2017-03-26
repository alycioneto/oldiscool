(function(){
  angular.module("saoVicentinoApp")
  .factory('github', ['$http', function githubFactory($http) {
     var getUser = function(){
       return $http.get("http://oldiscool.herokuapp.com/api/events")
     };
    return{ //what i return will represent the public api
      getUser: getUser
    };
  }]);

}());