const mongoose = require("mongoose");

const loginAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const loginAdminModel = new mongoose.model("loginRegAdmin", loginAdminSchema);
module.exports = loginAdminModel;
