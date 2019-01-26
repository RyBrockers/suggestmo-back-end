const express = require('express');

const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.get('*', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = app;