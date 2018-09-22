const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const sendgrid = require('sendgrid')('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');

// Load Input Validation
const validatePost = require("../Validation/Posts");
const validateLogin = require("../Validation/Login");
const validateEmailForm = require("../Validation/Email");

// Post model
const Post = require('../models/Post');
// Profile model
const User = require('../models/User');

// @route   GET routes/index/get
// @desc    Get posts
// @access  Public
router.get('/get',
  (req, res) => {
    Post.find()
      .sort({ date: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
  });

// @route   GET routes/index/get/:id
// @desc    Get post
// @access  Public
router.get('/get/:id',
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err =>
        res.status(404).json({ nopostfound: 'No post found with that userid' })
      );
  });



// @route   POST routes/index/
// @desc    Create a post
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePost(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
    });

    newPost
      .save()
      .then(post => res.json(post))
      .catch(err => res.json(err));
  }
);



// @route   POST routes/index/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          username: user.username,
          email: user.email,
          id: user.id
        };

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 32454352346 },
          (err, token) => {
            return res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   DELETE routes/index/:id
// @desc    Delete post
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        post
          .remove()
          .then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: "fail" }));
  }
);


// update post

// @route   POST api/profile
// @desc    Edit user profile
// @access  Private
router.post(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePost(req.body);
    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const postFields = {};
    postFields.title = req.body.title;
    postFields.body = req.body.body;

    // Update
    Post.findOneAndUpdate(
      {
        _id: req.params.id
      },
      { $set: postFields },
      { new: true }
    )
      .then(post => res.json(post))
      .catch(err => res.json(err));
  });

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

    return res.json({ err: "success!!!" });
  } catch (err) { return res.status(500).json({ err: "Sorry, something went wrong: " + err }) };
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
