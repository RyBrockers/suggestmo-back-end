const express = require('express');
const userRouter = require('../src/routes/userRouter');


const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.get('*', (_, res) => {
  res.redirect('/');
});

module.exports = app;