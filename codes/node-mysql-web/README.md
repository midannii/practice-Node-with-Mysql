
 해당 디렉토리에 `npm init` , `npm install underscore` , `npm install --save express` , `npm install pug --save` , `npm install --save supervisor` 진행하였음

## workflow

get('topic/') : view.jade

get('topic/:id') : view.jade

get('topic/add') : add.jade

  - post ('topic/add')
  - get('topic/:id') : view.jade

get('topic/:id/edit') : edit.jade

  - post ('topic/:id/edit')
  - get('topic/:id')

get('topic/:id/delete') : delete.jade
  - post ('topic/:id/delete')
  - get('topic/')


## jade란 ?

- [jade](https://jade-lang.com/)는 node.js용으로 만들어진 view 템플릿 엔진이다.

  - [템플릿 엔진](http://expressjs.com/ko/guide/using-template-engines.html)이란 동적인 파일과 정적인 파일의 장단점을 잘 결합한 형태의 새로운 체계이다.

    - 템플릿을 사용하면 코드 작성이 쉬워짐

    - for문 작성 가능

    - template 밖에서 선언한 변수 이용 가능

- jade 문법에 맞게 작성하면 해당 내용을 html이나 자바스크립트로 만들어 준다.
