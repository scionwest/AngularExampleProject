'use strict';

eventsApp.controller('EditProfileController',
  // Constructor
  function($scope, gravatarUrlBuilder) {
    $scope.user = {};

    // Get gravatar
    $scope.getGravatarUrl = function(email) {
      return gravatarUrlBuilder.buildGravatarUrl(email);
    };
  }
);
