'use strict';

angular.module('availabilityApp')
  .controller('MessageCtrl', function ($scope, $http) {
    $http.get('/api/message').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
