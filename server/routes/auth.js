const router = require('express').Router();
const User = require('../model/user');

const { registerValidation, loginValidation } = require('../util/validation');

router.post('/register', async (req, res) => {
  // Validate User
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists.');

  const user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    role: 'user',
  });

  try {
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login', (req, res) => {
  res.send('Login');
});

module.exports = router;
