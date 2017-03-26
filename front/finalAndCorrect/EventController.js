 
(function(){
angular.module('saoVicentinoApp')
.controller('EventController', ['$scope', 'github', function($scope, github){

var onUserComplete = function(data){
  $scope.event = data.data.events;
  console.log($scope.event);
};

var onError = function(reason){
  $scope.error = "Could not fetch the data.";
};
var onUserReturn = function(data){
 return data.data.events;
};

$scope.modalAppears = function(){
	$('.isHidden').removeClass();
};
	 function submitForm(id) {
$(".input-send").attr("disabled", true);
	    $.ajax({type:'POST', url:'/api/event/buy-ticket', data:$('#contact-form').serialize(),
		error: function(response){
			$(".input-send" ).attr("disabled", false);
		},
	     success: function(response) { 
	     $('.submit').html('send');
	     $('.send').removeClass('no-show');
	     $('.send').removeClass('no-show-mobile');
	      
	     // if reset form is required: document.contactform.reset();    
	}});              
	    return false;
	};
github.getUser()
.then(onUserComplete, onError);

}]);
}());


