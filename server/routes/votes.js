const router = require('express').Router();
const auth = require('../util/varifyToken');

router.get('/', auth, (req, res) => {
  res.send('posts');
});

module.exports = router;
