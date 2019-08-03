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

router.put(
  "/:id",
  [
    //check
  ],
  async (req,res) => {

    console.log(req)
    const updateUserId = req.params.id;
    const newUserInfo = req.body;

    const salt = await bcrypt.genSalt(10);
    newUserInfo.password = await bcrypt.hash(newUserInfo.password, salt);

    try {
      let result = await User.findByIdAndUpdate(updateUserId,newUserInfo);
      res.json(result);
    } catch(err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }

  }
)

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

module.exports = router;
