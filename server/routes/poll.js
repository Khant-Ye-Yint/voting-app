const router = require('express').Router();
const Poll = require('../model/poll');
const auth = require('../util/varifyToken');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

router.get('/', auth, async (req, res) => {
  const polls = await Poll.find();
  res.status(200).send(polls);
});

router.post('/', async (req, res) => {
  const poll = new Poll({
    title: req.body.title,
    slug: slugify(req.body.title),
    candidates: req.body.candidates,
  });
  try {
    const savedPoll = await poll.save();
    res.status(201).send(savedPoll);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
