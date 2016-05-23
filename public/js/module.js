'use strict';

var app = angular.module('stripeApp', ['stripe']);

app.config(function() {
  Stripe.setPublishableKey('pk_test_HJNWPlajghxupBJagvAGHsAJ');
});

app.controller('mainCtrl', function($scope) {

  $scope.saveCustomer = function(status, response) {
    console.log('status:', status);
    console.log('response:', response);
  };

});

