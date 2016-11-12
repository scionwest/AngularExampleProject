'use strict';
eventsApp.controller('EventController',
  function($scope, $anchorScroll, eventData) {
    $scope.event = eventData.event;

    // This works just like the callback promise approach below
    // The service uses $resource allowing this to bind right - but it's not used so that
    // I can demonstrate the interaction with the underlying promise object.
    //$scope.event = eventData.getEvent();
    eventData.getEvent().$promise.then(
      function(event) { // on success
        $scope.event = event;
      }).catch(
      function(response) { // on error
        console.log(response);
      }
    );

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
      session.canDownVote = true;
    };

    $scope.downVoteSession = function(session) {
      if (session.upVoteCount === 0) {
        return;
      }

      session.upVoteCount--;

      if (session.upVoteCount === 0) {
        session.canDownVote = false;
      }
    };

    $scope.scrollToSession = function() {
      $anchorScroll();
    };
  }
);
