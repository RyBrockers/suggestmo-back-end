const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const isEmail = require('isemail');


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail.validate, 'Invalid email address'],


  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long'],


  }
});

userSchema.pre('save', function hashPassword(next) {
  if (!this.isModified('password')) {
    return next();
  }
  return bcrypt.hash(this.password, 10, (error, hash) => {
    if (error) {
      return next(error);
    }
    this.password = hash;
    return next();
  });
});

userSchema.methods.sanitize = function sanitize() {
  const { password, ...rest } = this.toObject();
  console.log(rest);
  return rest;
};

userSchema.methods.validatePassword = function validatePassword(password) {
  console.log('hello');
  return bcrypt.compareSync(password, this.password);
}


const User = mongoose.model('User', userSchema);
module.exports = User;