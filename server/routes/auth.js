const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load Input Validation
const validateLogin = require("../Validation/Login");
const validateRegisterInput = require("../Validation/Register");

// Profile model
const User = require('../models/User');

// @route   POST api/user/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(username => {
        if (!username) {
            User.findOne({ email: req.body.email }).then(user => {
                if (user) {
                    errors.email = "Email already exists";
                    return res.status(400).json(errors);
                } else {

                    const newUser = new User({
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password
                    });

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => res.json(user))
                                .catch(err => console.log(err));
                        });
                    });
                }
            });
        } else {
            errors.username = "Username already exists";
            return res.status(400).json(errors);
        }
    });
});

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


module.exports = router;