'use strict';

var app = angular.module('stripeApp', ['stripe.checkout']);


app.controller('mainCtrl', function($scope) {

  $scope.doCheckout = function(token) {
    console.log('token:', token);
  };

})

