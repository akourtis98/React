const express = require('express');
const router = express.Router();
const passport = require('passport');
// Load Input Validation
const validatePost = require("../Validation/Posts");

// Post model
const Post = require('../models/Post');
// Profile model
const User = require('../models/User');

// @route   GET routes/index/get
// @desc    Get posts
// @access  Public
router.get('/get/posts',
    (req, res) => {
        Post.find()
            .sort({ date: -1 })
            .then(posts => res.json(posts))
            .catch(err => res.status(404).json({ nopostsfound: 'No posts found' + err }));
    });

// @route   GET routes/index/get/:id
// @desc    Get post
// @access  Public
router.get('/get/post/:id',
    (req, res) => {
        Post.findById(req.params.id)
            .then(post => res.json(post))
            .catch(err =>
                res.status(404).json({ nopostfound: 'No post found with that userid' + err })
            );
    });


// @route   POST routes/index/
// @desc    Create a post
// @access  Private
router.post(
    '/new/post',
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
            // comments: req.body.comments !== undefined ? comments : null,
            date: Date.now()
        });

        newPost
            .save()
            .then(post => res.json(post))
            .catch(err => res.json(err));
    }
);

// @route   DELETE routes/index/:id
// @desc    Delete post
// @access  Private
router.delete(
    '/delete/:id',
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

module.exports = router;