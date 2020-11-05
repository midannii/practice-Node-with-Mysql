var mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mypassword',
  database : 'midan'
});
conn.connect();

if (conn){
  console.log('connect success!')
};

// select all
var sql = 'SELECT * from mylogs';
conn.query(sql, function(err, row, fields) {
   try{
    console.log('rows: ', row);
    console.log('fields: ', fields);
  } catch(e){
    console.log(e)
  }

})

// select all & for loop
var sql = 'SELECT * from mylogs';
conn.query(sql, function(err, rows, fields) {
  try{
    console.log('SELECT data ')
    for(var i = 0; i<rows.length; i++){
      console.log(rows[i]);
    }} catch(e){
      console.log(e);
    }

})

// insert
var sql = 'INSERT INTO mylogs (title, description, dates) VALUES ("first day 2", "today is first day of this logs", "2020-11-03 23:40:50")';

conn.query(sql, function(err, rows, fields){
  try {
    console.log('INSERT data ')
    console.log(rows);
  } catch (e) {
    console.log(err);
  }
})

// insert with using params

var sql = 'INSERT INTO mylogs (title, description, dates) VALUES (?, ?, ?)';
var params = ["first day", "today is first day of this logs", '2020-11-04 00:05:10'];

conn.query(sql, params, function(err, rows, fields){
  try{
    console.log('INSERT data ')
    console.log(rows);
  } catch (e) {
    console.log(e);
  }
})

// update

var sql = 'UPDATE mylogs SET title = ?, description = ? WHERE id = ?';
var params = ["yesterday", "tomorrow i'm gonna make my db", 3];

conn.query(sql, params, function(err, rows, fields){
  try{
    console.log('UPDATE id = 3')
    console.log(rows);
  } catch(e) {
    console.log(e);
  }
})

// delete

var sql = 'DELETE FROM mylogs where id = ?';
var params = [2];

conn.query(sql, params, function(err, rows, fields){
  try {
    console.log('Delete id = 2')
    console.log(rows);
  } catch(e) {
    console.log(e);
  }
})

conn.end();
