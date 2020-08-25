const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

const User = require("../models/user");
const { populate } = require("../models/user");

router.get("/user", isLoggedIn(), (req, res, next) => {
  const userId = req.session.currentUser._id;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res, status(400).json({ message: "Specific id is not valid" });
    return;
  }

  User.findById(userId)
    .populate("helpMeRequests helpOthersRequests")
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/users", isLoggedIn(), (req, res, next) => {
  const userId = req.session.currentUser._id;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res, status(400).json({ message: "Specific id is not valid" });
    return;
  }

  User.findByIdAndUpdate(userId, {
    email: req.body.email,
    password: req.body.password,
    userImage: req.body.userImage,
  })
    .then(() => {
      res.json({
        message: `User is updated succesfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/users", (req, res, next) => {
  Thing.find()
    .then((thingsFromDB) => {
      res.status(200).json(thingsFromDB);
    })
    .catch((err) => next(err));
});

router.post("/users/create", (req, res, next) => {
  User.create(req.body)
    .then((aNewUser) => {
      res.status(200).json(aNewUser);
    })
    .catch((err) => next(err));
});

module.exports = router;
