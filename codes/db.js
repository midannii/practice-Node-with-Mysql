var mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mypassword',
  database : 'mydatabase'
});
conn.connect();


var sql = 'SELECT * from movies';
conn.query(sql, function(err, row, fields) {
  if (error){
    console.log(err);
  }else{
    console.log('rows', row);
    console.log('fields', fields);
  }

})

conn.end();
