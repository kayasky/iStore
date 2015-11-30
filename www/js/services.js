angular.module('iStore.services', [function() {
  Parse.initialize("upAgOJr8FOxwKyxw9s4AqhcrhWkHvNLEuuhAGxjr", "l0S98W9uxxkkHfsxpPM8Yp3wvaWAbWhSqNhxiR7G");
}])

.factory('featuredService', ['$q', function($q) {
  return {
    getAppIcon: function(id) {
      var defer = $q.defer(),
        apps = Parse.Object.extend("apps"),
        query = new Parse.Query(apps);

      query.equalTo("objectId", id);
      query.find().then(function(results) {
        return defer.resolve(results);
      });
      return defer.promise;
    },
    getApps: function() {
      var defer = $q.defer(),
        apps = Parse.Object.extend("featured"),
        query = new Parse.Query(apps);

      query.find().then(function(results) {
        return defer.resolve(results);
      });
      return defer.promise;
    }
  };
}])

.factory('Charts', function() {

  /* Dummy data */
  var chats = [{
    id: 0,
    name: 'First App',
    lastText: 'Games',
    thumb: 'img/app-icon.png'
  }, {
    id: 1,
    name: 'Second App',
    lastText: 'Shopping',
    thumb: 'img/app-icon.png'
  }, {
    id: 2,
    name: 'Third App',
    lastText: 'Games',
    thumb: 'img/app-icon.png'
  }, {
    id: 3,
    name: 'Fourth App',
    lastText: 'Productivity',
    thumb: 'img/app-icon.png'
  }, {
    id: 4,
    name: 'Fifth App',
    lastText: 'Reference',
    thumb: 'img/app-icon.png'
  }, {
    id: 0,
    name: 'First App',
    lastText: 'Games',
    thumb: 'img/app-icon.png'
  }, {
    id: 1,
    name: 'Second App',
    lastText: 'Shopping',
    thumb: 'img/app-icon.png'
  }, {
    id: 2,
    name: 'Third App',
    lastText: 'Games',
    thumb: 'img/app-icon.png'
  }, {
    id: 3,
    name: 'Fourth App',
    lastText: 'Productivity',
    thumb: 'img/app-icon.png'
  }, {
    id: 4,
    name: 'Fifth App',
    lastText: 'Reference',
    thumb: 'img/app-icon.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
