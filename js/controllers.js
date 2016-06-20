
// the functionality definition, ng-app uses this
var artistControllers = angular.module('artistControllers', []);
// instead of reading files from json, service can be called to read the external files 
// this can be done using service, so import http service for Mycontroller.
// FOR MINIFICATION, pass the names to be retained in ['$name', '$name2'  in controller ex scope and http
// TL;DR use [] to save name definition during minification
artistControllers.controller('ListController',['$scope','$http', function ($scope, $http ){

// access http service and ask it to get information from json file
// read json data, and on sucess execute the function
// in run : chrome.exe --allow-file-access-from-files --disable-web-security
$http.get('js/data.json').success(function(data){

$scope.artists=data;
$scope.artistOrder='name';
});
}]);


artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);