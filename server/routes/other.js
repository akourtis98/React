const express = require('express');
const router = express.Router();
const sendgridkey = require("../config/sendgridkey").key;
const sendgrid = require('sendgrid')(sendgridkey);

// Load Input Validation
const validateEmailForm = require("../Validation/Email");

// Post model
const Post = require('../models/Post');

router.post('/email', (req, res) => {
  const { errors, isValid } = validateEmailForm(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  try {
    sendgrid.send({
      to: 'akourtisdev@gmail.com',
      from: req.body.email,
      subject: req.body.subject,
      text: req.body.message
    })

    return res.json("success!!!");
  } catch (err) { return res.status(500).json("Sorry, something went wrong: " + err) };
});

router.get('/search/:handle', (req, res) => {
  let data = [];

  Post.find()
    .then(posts => {
      posts.forEach(el => {
        if (el.title.toLowerCase().includes(req.params.handle.toLowerCase())) {
          data.push(el);
        }
      });
      return res.json(data)
    })
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' + err }));
});

module.exports = router;

