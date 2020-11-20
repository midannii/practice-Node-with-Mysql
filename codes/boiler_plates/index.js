const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {auth} = require('/middleware/auth.js');

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

app.get("/api/users/auth", auth, (req, res) =>{
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role
  })
})

// add info with postman: https://www.youtube.com/watch?v=FW7MfF4RDjg&list=PL9a7QRYt5fqly7BrCxOS71BqLLb9OeXKd&index=6
app.post('/api/users/register', (req,res)=> {
  const user = new User(req.body)

  // 정보 저장 전에, password를 hash 과정 거쳐서 저장
  user.save((err, userData) => {
    if(err) return res.json({success: false, err});
    return res.status(200);
  })
});

// login
app.post('/api/user/login', (req, res) => {
  // find the e-email
  User.findOne({email: req.body.email}, (err, user) => {
    if(!user)
    return res.json({
      loginSuccess:false, message: "No user matches"
    })
  })
  // compare Password
  user.comparePassword(req.body.password, (err, isMatch) => {
    if (!isMatch){
      return res.json({  loginSuccess:false, message: "wrong password"})
    }
  })
  //generateToken
  user.generateToken((err, user) => {
    if(err) return res.status(400).send(err);
    res.cookie("x_auth", user.tocken).status(200).json({
      loginSuccess: true});
  })
});


//logout
app.get("/api/user/logout", auth, (req,res) =>{
  User.findOneAndUpdate({_id: req.user._id}, {token: ""}, (err, doc) =>{
    if(err) return res.json({'success':false, err})
    return res.status(200).send({
      success:true
    })
  })
})


app.listen(5000);
