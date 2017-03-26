 
(function(){
angular.module('saoVicentinoApp')
.controller('pastEventController', ['$scope', 'github', '$filter','$routeParams', function($scope, github, $filter, $routeParams){
$scope.id = $routeParams.id;

var onUserComplete = function(data){
var json =  data.data.events;
var result = $filter('filter')(json.events, {id: $scope.id})[0];
$scope.event = events;
console.log($scope.event);
  	//$scope.name = result.name;
};

var onError = function(reason){
  $scope.error = "Could not fetch the data.";
};
var onUserReturn = function(data){
 return data.data.events;
};

github.getUser()
.then(onUserComplete, onError);

}]);
}());
