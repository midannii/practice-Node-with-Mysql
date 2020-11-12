const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connect with mongoDB
// https://www.youtube.com/watch?v=TTmfGULw0Uw&list=PL9a7QRYt5fqly7BrCxOS71BqLLb9OeXKd&index=2
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true}).then(() => console.log('DB connected'))
                          .catch(err => console.error(err));

app.get('/', (req,res) => {
  res.send('hello world')
});

app.listen(5000);
