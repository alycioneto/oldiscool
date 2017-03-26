(function(){
  var app = angular.module("saoVicentinoApp", ["ngRoute"]);

  app.config(function($routeProvider){ //do this configuration when bringing this module to life
    $routeProvider
      .when("/", {
        templateUrl:"carouseltest.html",
        controller:"EventController"
      })
      .otherwise({redirectTo:"/"});
  });
}());
