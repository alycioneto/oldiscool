(function(){
  var app = angular.module("saoVicentinoApp", ["ngRoute"]);

  app.config(function($routeProvider){ //do this configuration when bringing this module to life
    $routeProvider
      .when("/", {
        templateUrl:"user.html",
        controller:"EventController"
      })
      .otherwise({redirectTo:"/"});
  });
}());
 