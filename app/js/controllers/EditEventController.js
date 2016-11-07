'use strict';

eventsApp.controller('EditEventController', function($scope, eventData) {
  $scope.saveEvent = function(event, newEventForm) {
    if (!newEventForm.$valid) {
      console.log(newEventForm);
      return;
    }

    eventData.save(event).$promise
      .then(function(response) {
        console.log('success', response);
      })
      .catch(function(response) {
        console.log('failure', response);
      });
  }

  $scope.cancelEdit = function() {
    window.location = "/EventDetails.html";
  }
});
