const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

const HelpRequest = require("../models/helprequest");

//POST route => to create a new helprequest
//       /api/helprequest
router.post("/helprequest", isLoggedIn(), (req, res, next) => {
  HelpRequest.create({
    userId: req.session.currentUser._id,
    title: req.body.title,
    description: req.body.description,
    city: req.body.city,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET route => to get all the helprequests????FRONT-end?
router.get("/helprequest", isLoggedIn(), (req, res, next) => {
  HelpRequest.find()
    .populate("userId", "sender")
    .then((allTheHelpRequests) => {
      res.json(allTheHelpRequests);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GEt route => to get a specific helprequest
router.get("/helprequest/:id", isLoggedIn(), (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  HelpRequest.findById(req.params.id)
    .populate("userId", "sender")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});
// PUT route => to update a specific helprequest
router.put("/helprequest/:id", isLoggedIn(), (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  HelpRequest.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Helprequest with ${req.params.id} is updated succesfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

//DELETE route => to delete a specific helprequest
router.delete("/helprequest/:id", isLoggedIn(), (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: `Specified id is not valid` });
    return;
  }
  HelpRequest.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `HelpRequest with ${req.params.id}is removed succesfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
