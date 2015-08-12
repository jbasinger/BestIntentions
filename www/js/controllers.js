angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})
.controller('HomeCtrl', function($scope, $ionicModal, intent, $rootScope) {
  $scope.intentData = intent.getData();
  $rootScope.$on('intent', function(data){
    $scope.intentData = intent.getData();
  });
})
.factory('intent', function($rootScope){
  var intent = {data:null};

  intent.setData = function(data){
    intent.data = data;
    $rootScope.$broadcast('intent');
  };

  intent.getData = function(){
    return intent.data;
  };

  return intent;
});
