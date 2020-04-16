var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (postObj) {
      // console.log("HI FROM models!!",postObj);

      let message = postObj.message;
      for (let key in postObj) {
        db.connectionAsync.query(`INSERT INTO ${key} VALUES (${postObj[key]})`);
      }


    } // a function which can be used to insert a message into the database
  },

  //INSERT INTO pet
  // VALUES ('Puffball','Diane','hamster','f','1999-03-30',NULL);

  users: {
    // Ditto as above.
    get: function () {
      // let user = postObj.username

    },
    post: function (postObj) {
      let message = postObj.message;
      db.connectionAsync.query(FIXME, (err, postObj) => {
        if (err) {
          console.log(err);
        } else {
          for (let key in postObj) {
            `INSERT INTO ${key} VALUES (${postObj[key]});`;
          }
        }
      });
    }
  }
};



