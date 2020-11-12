const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const config = require("./config/key");

// connect with mongoDB
// https://www.youtube.com/watch?v=TTmfGULw0Uw&list=PL9a7QRYt5fqly7BrCxOS71BqLLb9OeXKd&index=2
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true}).then(() => console.log('DB connected'))
                          .catch(err => console.error(err));


  //to not get any deprecation warning or error
  //support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

// nodemon
app.get('/', (req,res) =>{
  res.json({"hello~": "Hi ~~~ midannii!"})
})

// add info with postman: https://www.youtube.com/watch?v=FW7MfF4RDjg&list=PL9a7QRYt5fqly7BrCxOS71BqLLb9OeXKd&index=6
app.post('/api/users/register', (req,res)=> {
  const user = new User(req.body)

  user.save((err, userData) => {
    if(err) return res.json({success: false, err});
    return res.status(200);
  })
})

app.get('/', (req,res) => {
  res.send('hello world')
});

app.listen(5000);
