eventsApp.factory('eventData',
  function($resource) {
    var resource = $resource('/api/data/event/:id', { id:'@id' });

    // return new service object with methods that can be used to query and fetch event data.
    var service = {
      getEvent: function() { return resource.get({id:1}); },
      save: function(event) {
        event.id = 999; // hard-coded for now....
        return resource.save(event);
      }
    };

    return service;
  }
);
