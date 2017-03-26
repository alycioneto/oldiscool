 
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


		$scope.ingressos1 = 40;
		$scope.ingressos2 = 30;
		$scope.ingressos3 = 20;
		$scope.ingressos4 = 10;

$scope.modalAppears = function(i){
	$('.isHidden.num'+i).removeClass();
};	 $scope.submitForm = function(id) {
$(".input-send").attr("disabled", true);
	    // $.ajax({type:'POST', url:'/api/event/buy-ticket', data:$('#contact-form').serialize(),
		// error: function(response){
		// 	$(".input-send" ).attr("disabled", false);
		// },
	    //  success: function(response) { 
	    //  $('.submit').html('send');
	    //  $('.send').removeClass('no-show');
	    //  $('.send').removeClass('no-show-mobile');

		$scope.ingressos1 = $scope.ingressos1 - 1; 

		alert('Parabens voce garantiu seu lugar na festa. Enviamos maiores detalhes para seu e-mail');
	      
	     // if reset form is required: document.contactform.reset();    
	// }});              
	    return false;
	};
github.getUser()
.then(onUserComplete, onError);

}]);
}());


