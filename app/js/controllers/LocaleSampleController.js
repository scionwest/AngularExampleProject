'use string';

eventsApp.controller('LocaleSampleController',
  function($scope, $locale){
    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

    // Log out the locale service so we can see what available formats there are.
    console.log($locale);
  }
);
