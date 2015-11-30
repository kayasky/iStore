angular.module('iStore.controllers', [])

.controller('FeaturedCtrl', ['$scope', 'featuredService', function($scope, featuredService) {
  var promise = featuredService.getApps();
  promise.then(function(response) {
    console.log(response);
  }, function(response) {
    console.log(response);
  });
}])

.controller('ChartsCtrl', function($scope, Charts) {

  $scope.$on('$ionicView.enter', function(e) {
    console.log('Entered Charts view');
  });

  $scope.chats = Charts.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ExploreCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('SearchCtrl', function($scope) {

})

.controller('UpdatesCtrl', function($scope) {

});
