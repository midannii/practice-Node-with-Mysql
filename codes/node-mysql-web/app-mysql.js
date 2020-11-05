// connect with Mysql
var mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mypassword',
  database : 'midan'
});
conn.connect();
