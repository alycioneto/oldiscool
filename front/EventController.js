 
(function(){
angular.module('saoVicentinoApp', ['angularModalService'])
.controller('EventController', ['$scope', 'ModalService', 'github','$filter', function($scope, ModalService, github, $filter){

var onUserComplete = function(data){
  $scope.event = data.data.events;
 
};
var onError = function(reason){
  $scope.error = "Could not fetch the data.";
};
var onUserReturn = function(data){
 return data.data.events;
};


$scope.modalAppears = function(){

    ModalService.showModal({
      templateUrl: "modal-buy-ticket.html",
      controller: "BuyTicketController",
      inputs: {
        title: "Comprar ingresso"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      });
    });

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

}]).controller('ComplexController', [
  '$scope', '$element', 'title', 'close', 
  function($scope, $element, title, close) {

  $scope.name = null;
  $scope.email = null;
  $scope.phone = null;
  $scope.title = title;
  $scope.subtitle = subtitle;
  
  //  This close function doesn't need to use jQuery or bootstrap, because
  //  the button has the 'data-dismiss' attribute.
  $scope.close = function() {
 	  close({
      name: $scope.name,
      age: $scope.age
    }, 500); // close, but give 500ms for bootstrap to animate
  };

  //  This cancel function must use the bootstrap, 'modal' function because
  //  the doesn't have the 'data-dismiss' attribute.
  $scope.cancel = function() {

    //  Manually hide the modal.
    $element.modal('hide');
    
    //  Now call close, returning control to the caller.
    close({
      name: $scope.name,
      age: $scope.age
    }, 500); // close, but give 500ms for bootstrap to animate
  };

}]);
}());


