var models = require('../models');
var url = require('url');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let params = [req.body.username, req.body.message, req.body.roomname];
      models.messages.post(params, (err, results) => {
        console.log(results);
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        res.json(results);
      });
    },
    post: function (req, res) {
      let params = [req.body.username];
      models.users.post(params, (err, results) => {
        res.json(results);
      });
    }
  }
};

// //if endpoint is messages, goes here
// let endpoint = url.parse(req.url, true).pathname;
// let property = endpoint.replace(/^\//, '');
// // console.log("HI from controller!")
// if (req.method === 'POST' && property === 'messages') {
//   // res.write(req.body)
//   // console.log(req.body);
//   let params = [req.body[username], req.body[text], req.body[roomname]];
//   models.messages.post(params,(err, results) => {
//     res.json(results);
//   });
//   res.statusCode = 201;
// } else {
//   res.statusCode = 404;
// }
// res.end();