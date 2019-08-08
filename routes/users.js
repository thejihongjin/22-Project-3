const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

//@route put api/users/id
//@desc update a user
//@access private

//@route   POSt api/users
//@desc    Register a user
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
  const { username, firstname, lastname, displayname, email, bio, password, avatar } = req.body;

  const userFields = {};
  if (username) userFields.username = username;
  if (firstname) userFields.firstname = firstname;
  if (lastname) userFields.lastname = lastname;
  if (displayname) userFields.displayname = displayname;
  if (email) userFields.email = email;
  if (bio) userFields.bio = bio;
  if (avatar) userFields.avatar = avatar

  try {
    let user = await User.findById(req.params.id);

    // Make sure user owns event
    if (user._id.toString() !== req.params.id) {
      return res.status(401).json({ msg: "Not authorized" });
    } else {
      //If new password, encrypt them
      if (password) {
        const salt = await bcrypt.genSalt(10);
        userFields.password = await bcrypt.hash(password, salt);
      }

      //update user and return 
      const response = await user.updateOne(
        { $set: userFields },
        { new: true }
      );

      res.json(response);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  console.log("req");
  console.log(req.attending);
  try {
    const users = await User.find();
    //console.log(users);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
