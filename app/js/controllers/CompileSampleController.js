'use strict';

eventsApp.controller('CompileSampleController',
  function($scope, $compile, $parse) {

    // Example parsing expressions into functions
    var fn = $parse('1 + 2');
    console.log(fn());

    var getter = $parse('event.name');
    var context1 = { event: { name: 'AngularJS BootCamp'}};
    var context2 = { event: { name: 'Code Camp'}};

    console.log(getter(context1));
    console.log(getter(context2));
    console.log(getter(context2, context1));

    // Can use the assign property on the parsed function, to fetch a function that can be used to assign values.
    var setter = getter.assign;
    setter(context2, 'Code Retreat');
    console.log(context2.event.name);

    $scope.appendDivToElement = function(markup) {
      return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
    }
  }
);
