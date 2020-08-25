const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

const HelpRequest = require("../models/helprequest");
const User = require("../models/user");

//POST route => to send message to helprequesters
router.post("/sendhelpform/:id", isLoggedIn(), (req, res, next) => {
  const helpRequestId = req.params.id;
  console.log(helpRequestId)
  const newMessage = {
    sender: req.session.currentUser._id,
    senderEmail: req.body.senderEmail,
    senderTel: req.body.senderTel,
    message: req.body.message,
  };
  HelpRequest.findByIdAndUpdate(
    helpRequestId,
    {
      $push: { helpMessages: newMessage },
    },
    { new: true }
  )
    .then((updatedHelpRequest) => {
      User.findByIdAndUpdate(req.session.currentUser._id, {$push:{ helpOthersRequests: updatedHelpRequest._id }}, {new: true})
        .populate("helpOthersRequests")
        .then( (updatedUser) => {
          res.json(updatedUser);
        } )
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
