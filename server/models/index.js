var db = require('../db');

// `SELECT messages.id, messages.usermessage, messages.roomname FROM messages
//         LEFT OUTER JOIN users ON (messages.userid = users.id)
//         ORDER BY messages.id desc`

module.exports = {
  messages: {
    get: function (cb) {
      let queryString = 'SELECT * FROM messages';
      db.query(queryString, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(data, 'great success');
          cb(null, data);
        }
      });
    }, // a function which produces all the messages
    post: function (params, cb) {
      let queryString = 'INSERT INTO messages(userid, usermessage, roomname) VALUES ((select id from users where username = ? limit 1), ?, ?)';
      db.query(queryString, params, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(params);
          // console.log(data);
          cb(null, data);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      let queryString = 'select * from users';
      db.query(queryString, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          cb(null, data);
        }
      });
    },
    post: function (params, cb) {
      let queryString = 'INSERT INTO users(username) VALUES (?)';
      db.query(queryString, params, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          cb(null, data);
        }
      });
    }
  }
};



