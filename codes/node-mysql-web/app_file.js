// 업로드한 파일을 서비스하는 방법
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var _storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({ storage: _storage })
var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: false })); // app이 bodyParser 이용할 것임
    // post 방식으로 들어오는 글들의 요청을 가로채서, 이후 req 객체에 body라는 property를 만들어서 post data에 접근 가능하도록
app.locals.pretty = true;
app.use('/user', express.static('uploads'));
app.set('views ', './views_file'); // views_file 디렉토리에 해당 template file 둘 것임
app.set('view engine', 'pug'); // 사용할 template 종류 알려줌 (jade)
app.get('/upload', function(req, res){
  res.render('upload');
});
app.post('/upload', upload.single('userfile'), function(req, res){
  res.send('Uploaded : '+req.file.filename);
});
app.get('/topic/new', function(req, res){
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics:files});
  });
});
app.get(['/topic', '/topic/:id'], function(req, res){ // :id는 바뀔 수 있는 부분
  fs.readdir('data', function(err, files){ // parameter: data경로, callback 함수
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    var id = req.params.id; // 만약 :name 이면, req.params.name
    if(id){
      // id값이 있을 때
      fs.readFile('data/'+id, 'utf8', function(err, data){ // data 폴더에 id와 동일한 제목의 글 읽어오기
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        }
        // files: data 파일 이름이 담긴 array
        res.render('view', {topics:files, title:id, description:data});
      })
    } else {
      // id 값이 없을 때
      res.render('view', {topics:files, title:'Welcome', description:'Hello, JavaScript for server.'});
    }
  })
});
app.post('/topic', function(req, res){ // topic 에서부터 받은 파일들을 저장하기 위해 route 연결
  // fs를 이용하여, topic에서 입력받은 title을 제목으로, description을 내용으로 하여 data 폴더에 글 저장 (비효율적 방법)
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title, description, function(err){
    if(err){
      console.log(err);
      // status 500 = 내부 서버 오류
      res.status(500).send('Internal Server Error');
    }
    res.redirect('/topic/'+title);
  });
})
app.listen(3000, function(){
  console.log('Connected, 3000 port!');
})
