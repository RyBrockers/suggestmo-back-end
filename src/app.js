const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const movieRouter = require('./routes/movieRoute');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/users', userRouter);
app.use('/login', authRouter);
app.use('/addMovie', movieRouter);
app.use('/deletMovie', movieRouter);
// app.use('/auth', authRouter);

app.get('*', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = app;