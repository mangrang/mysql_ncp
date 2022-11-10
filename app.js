const express = require('express');
const app = express();
const PORT = 8005;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
const userRouter = require('./routes/user'); // index는 생략가능
app.use('/user', userRouter); // localhost:PORT/경로는 기본으로 ./routes/index.js 파일에 선언

// TODO: 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`PORT NUMBER is ${PORT}!!`);
});
