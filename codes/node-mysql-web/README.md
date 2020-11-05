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

- jade는 node.js용으로 만들어진 view 템플릿 엔진이다.

  - 템플릿 엔진이란 동적인 파일과 정적인 파일의 장단점을 잘 결합한 형태의 새로운 체계이다.

- jade 문법에 맞게 작성하면 해당 내용을 html이나 자바스크립트로 만들어 준다.
