// const jwt = require('jsonwebtoken');

// exports.login = (req, res) => {
//   User.findOne({ email: req.body.email }, (error, user) => {
//     if (user !== null && user.validatePassword(req.body.password)) {
//       jwt.sign(user.sanitize(), process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
//         res.status('200').json({ token });
//       });
//     } else {
//       res.status(401).send();
//     }
//   });
// };