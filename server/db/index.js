var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

let connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});


connection.connect(function(err, rows, fields) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('connected');
});

// connection.query(queryString, queryArgs, function(err, results) {
//   // console.log("INSIDE CONECTION uery")
//   done();
// });

connection.end();

module.exports = {connectionAsync: connection};