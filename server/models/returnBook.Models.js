const mongoose = require("mongoose");

const ReturnBook = new mongoose.Schema({
  returnId: {
    type: String,
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  isbnNumber: {
    type: String,
    required: true,
  },
  isbnNumber: {
    type: String,
    required: true,
  },
  memberId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const returnBookMg = mongoose.model("returnBook", ReturnBook);
module.exports = returnBookMg;
