angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
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
