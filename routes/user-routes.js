const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

const User = require("../models/user");

router.put("/users", isLoggedIn(), (req, res, next) => {
  const userId = req.session.currentUser._id
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res, status(400).json({ message: "Specific id is not valid" });
    return;
  }

  User.findByIdAndUpdate( 
      userId, 
      { email: req.body.email,
        password: req.body.password,
        userImage: req.body.userImage,  
       }
      )
    .then(() => {
      res.json({
        message: `User is updated succesfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
