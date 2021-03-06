const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Validation
const validateProfileInput = require("../Validation/Profile");

// Load Profile Model
const Profile = require("../models/Profile");

// Load User Model
const User = require("../models/User");

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
    "/get/current",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const errors = {};

        Profile.findOne({ user: req.user.id })
            .then(profile => {
                if (!profile) {
                    errors.noprofile = "There is no profile for this user";
                    return res.status(404).json(errors);
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    }
);


// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
    "/get/profile/:username",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const errors = {};

        Profile.findOne({ username: req.params.username })
            .then(profile => {
                if (!profile) {
                    errors.noprofile = "There is no profile for this user";
                    return res.status(404).json(errors);
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    }
);

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
    "/new/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateProfileInput(req.body);

        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
        }

        // Get fields
        const profileFields = {};
        profileFields.user = req.user.id;
        profileFields.username = req.user.username;
        if (req.body.company) profileFields.company = req.body.company;
        if (req.body.website) profileFields.website = req.body.website;
        if (req.body.location) profileFields.location = req.body.location;
        if (req.body.bio) profileFields.bio = req.body.bio;
        if (req.body.status) profileFields.status = req.body.status;

        // Skills - Spilt into array
        if (typeof req.body.skills !== "undefined") {
            profileFields.skills = req.body.skills.split(",");
        }

        Profile.findOne({ user: req.user.id }).then(profile => {
            if (profile) {
                // Update
                Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                )
                    .then(profile => res.json(profile))
                    .catch(err => res.status(404).json(err));
            } else {
                // Save Profile
                new Profile(profileFields)
                    .save()
                    .then(profile => res.json(profile))
                    .catch(err => res.status(404).json(err));
            }
        });
    }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
    "delete/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Profile.findOneAndRemove({ user: req.user.id }).then(() => {
            User.findOneAndRemove({ _id: req.user.id }).then(() =>
                res.json({ success: true })
            );
        });
    }
);

module.exports = router;
