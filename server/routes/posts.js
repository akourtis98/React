const express = require('express');
const router = express.Router();
const passport = require('passport');
// Load Input Validation
const validatePostInput = require("../Validation/Posts");

// Post model
const Post = require('../models/Post');


// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post(
    '/add/comment/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);

        // Check Validation
        if (!isValid) {
            // If any errors, send 400 with errors object
            return res.status(400).json(errors);
        }

        Post.findById(req.params.id)
            .then(post => {
                const newComment = {
                    text: req.body.text,
                    name: req.user.username,
                    user: req.user.id
                };

                // Add to comments array
                post.comments.unshift(newComment);

                // Save
                post.save().then(post => res.json(post));
            })
            .catch(err => res.status(404).json('No post found'));
    }
);

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete(
    '/comment/:id/:comment_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Post.findById(req.params.id)
            .then(post => {
                // Check to see if comment exists
                if (
                    post.comments.filter(
                        comment => comment._id.toString() === req.params.comment_id
                    ).length === 0
                ) {
                    return res
                        .status(404)
                        .json('Comment does not exist');
                }

                // Get remove index
                const removeIndex = post.comments
                    .map(item => item._id.toString())
                    .indexOf(req.params.comment_id);

                // Splice comment out of array
                post.comments.splice(removeIndex, 1);

                post.save().then(post => res.json(post));
            })
            .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    }
);


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

// @route   POST api/posts/like/:id
// @desc    Like post
// @access  Private
router.post(
    '/like/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Post.findById(req.params.id)
                .then(post => {
                    if (
                        post.likes.filter(like => like.user.toString() === req.user.id)
                            .length > 0
                    ) {
                        return res
                            .status(400)
                            .json({ alreadyliked: 'User already liked this post' });
                    }

                    // Add user id to likes array
                    post.likes.unshift({ user: req.user.id });

                    post.save().then(post => res.json(post));
                })
                .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
        });
    }
);

// @route   POST api/posts/unlike/:id
// @desc    Unlike post
// @access  Private
router.post(
    '/unlike/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Post.findById(req.params.id)
                .then(post => {
                    if (
                        post.likes.filter(like => like.user.toString() === req.user.id)
                            .length === 0
                    ) {
                        return res
                            .status(400)
                            .json({ notliked: 'You have not yet liked this post' });
                    }

                    // Get remove index
                    const removeIndex = post.likes
                        .map(item => item.user.toString())
                        .indexOf(req.user.id);

                    // Splice out of array
                    post.likes.splice(removeIndex, 1);

                    // Save
                    post.save().then(post => res.json(post));
                })
                .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
        });
    }
);

router.get('/get/userposts',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Post.find({ author_id: req.user.id })
            .then(posts => res.json(posts))
            .catch(err => res.status(404).json('No article found'));
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
        const { errors, isValid } = validatePostInput(req.body);

        // Check Validation
        if (!isValid) {
            // If any errors, send 400 with errors object
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            title: req.body.title,
            text: req.body.text,
            name: req.user.username,
            author_id: req.user.id
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
        const { errors, isValid } = validatePostInput(req.body);
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
