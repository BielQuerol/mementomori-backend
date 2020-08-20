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
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res, status(400).json({ message: "Specific id is not valid" });
    return;
  }

  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `UserImage With ${req.params.id}is updated succesfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
