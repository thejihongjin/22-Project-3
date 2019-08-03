const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   POSt api/users
// @desc    Register a user
//@access   Public
router.post(
  "/",
  [
    check("username", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid emial").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, displayname, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        username,
        displayname,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 36000000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.put("/:id", async (req, res) => {
  console.log(req.user.id);
  const {
    username,
    firstname,
    lastname,
    displayname,
    email,
    bio,
    attendingId,
    petitionId
  } = req.body;

  const userFields = {};
  if (username) userFields.username = username;
  if (firstname) userFields.firstname = firstname;
  if (lastname) userFields.lastname = lastname;
  if (displayname) userFields.displayname = displayname;
  if (email) userFields.email = email;
  if (bio) userFields.bio = bio;
  if (attendingId) userFields.attendingId = attendingId;
  if (petitionId) userFields.petitionId = petitionId;

  try {
    let user = await User.findById(req.params.id);

    // Make sure user owns event
    if (user._id.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
