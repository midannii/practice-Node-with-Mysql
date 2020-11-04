var mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mypassword',
  database : 'mydatabase'
});
conn.connect();

// select all
var sql = 'SELECT * from mylogs';
conn.query(sql, function(err, row, fields) {
  if (error){
    console.log(err);
  }else{
    console.log('rows', row);
    console.log('fields', fields);
  }

})

// select all & for loop
var sql = 'SELECT * from mylogs';
conn.query(sql, function(err, rows, fields) {
  if (error){
    console.log(err);
  }else{
    for(var i = 0; i<rows.length; i++){
      console.log(rows[i].title);
    }
  }

})

// insert
var sql = 'INSERT INTO mylogs (title, description, date) VALUES ("first day", "today is first day of this logs", NOW())';

conn.query(sql, function(err, rows, fields){
  if (error) {
    console.log(err);
  } else {
    console.log(rows.title);
  }
})

// insert with using params

var sql = 'INSERT INTO mylogs (title, description, date) VALUES (?, ?, ?)';
var params = ["first day", "today is first day of this logs", NOW()];

conn.query(sql, params, function(err, rows, fields){
  if (error) {
    console.log(err);
  } else {
    console.log(rows.title);
  }
})

// update

var sql = 'UPDATE mylogs SET title = ?, description = ? WHERE id = ?';
var params = ["yesterday", "tomorrow i'm gonna make my db", 1];

conn.query(sql, params, function(err, rows, fields){
  if (error) {
    console.log(err);
  } else {
    console.log(rows.title);
  }
})

// delete

var sql = 'DELETE FROM mylogs where id = ?';
var params = [1];

conn.query(sql, params, function(err, rows, fields){
  if (error) {
    console.log(err);
  } else {
    console.log(rows.title);
  }
})


conn.end();
