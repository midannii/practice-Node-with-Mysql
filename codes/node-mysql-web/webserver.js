const http = require('http');

const hostname = '127.0.0.1'; // 컴퓨터의 ip 같은 것
const port = 1338;

http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => { // 서버를 만들어, hostname으로 접속한 user에게서  port를 listening 하게끔
 console.log(`Server running at http://${hostname}:${port}/`); // 응답 결과
});
