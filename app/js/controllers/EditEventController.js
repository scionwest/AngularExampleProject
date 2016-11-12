'use strict';

eventsApp.controller('EditEventController',
  // Constructor
  function($scope, eventData) {

    // Save Event function
    $scope.saveEvent = function(event, newEventForm) {
      if (!newEventForm.$valid) {
        console.log(newEventForm);
        return;
      }

      // Save event via service
      eventData.save(event).$promise.then(
        function(response) {
          console.log('success', response);
        }).catch(
        function(response) {
          console.log('failure', response);
        }
      );
    }

    // Cancel event creation
    $scope.cancelEdit = function() {
      window.location = "/EventDetails.html";
    }
  }
);
