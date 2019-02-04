const mongoose = require('mongoose');
const app = require('./src/app');


console.log(process.env.DATABASE_CONN);
mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, (error) => {
  console.log(error);
  app.listen(3000);
});