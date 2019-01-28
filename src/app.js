const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/users', userRouter);

app.get('*', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = app;