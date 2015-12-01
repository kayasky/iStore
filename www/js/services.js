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
    name: 'App Name',
    lastText: 'Games',
    thumb: 'img/appa.png'
  }, {
    id: 1,
    name: 'App Name',
    lastText: 'Shopping',
    thumb: 'img/appb.png'
  }, {
    id: 2,
    name: 'App Name',
    lastText: 'Games',
    thumb: 'img/appc.png'
  }, {
    id: 3,
    name: 'App Name',
    lastText: 'Productivity',
    thumb: 'img/appd.png'
  }, {
    id: 4,
    name: 'App Name',
    lastText: 'Reference',
    thumb: 'img/appe.png'
  }, {
    id: 5,
    name: 'App Name',
    lastText: 'Games',
    thumb: 'img/appf.png'
  }, {
    id: 6,
    name: 'App Name',
    lastText: 'Shopping',
    thumb: 'img/appg.png'
  }, {
    id: 7,
    name: 'App Name',
    lastText: 'Games',
    thumb: 'img/apph.png'
  }, {
    id: 8,
    name: 'App Name',
    lastText: 'Productivity',
    thumb: 'img/appi.png'
  }, {
    id: 9,
    name: 'App Name',
    lastText: 'Reference',
    thumb: 'img/appa.png'
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
