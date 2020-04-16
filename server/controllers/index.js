var models = require('../models');
var url = require('url');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      //if endpoint is messages, goes here
      let endpoint = url.parse(req.url, true).pathname;
      let property = endpoint.replace(/^\//, '');
      // console.log("HI from controller!")
      if (req.method === 'POST' && property === 'messages') {
        // res.write(req.body)
        // console.log(req.body);
        models.messages.post(req.body);
        res.statusCode = 201;
      } else {
        res.statusCode = 404;
      }
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      let endpoint = url.parse(req.url, true).pathname;
      let property = endpoint.replace(/^\//, '');
      // if endpoint is users, info here
      if (req.method === 'POST' && property === 'users') {
        res.statusCode = 201;
        models.users.post(req.body);
      } else {
        res.statusCode = 404;
      }
      res.end();
    }
  }
};

