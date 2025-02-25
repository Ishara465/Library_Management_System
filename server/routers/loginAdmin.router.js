const express = require("express");
const loginRegAdmin = require("../models/loginAdmin.model");
const router = express.Router();

router.post("/libraryBk/register", (req, res) => {
  console.log("Received Data: ", req.body);
  loginRegAdmin
    .create(req.body)
    .then((user) => req.json(user))
    .catch((err) => res.json(err));
});

router.post("/libraryBk/login", (req, res) => {
  const { email, password } = req.body;
  loginRegAdmin.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record exited");
    }
  });
});

module.exports = router;
