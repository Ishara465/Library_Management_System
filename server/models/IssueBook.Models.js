const mongoose = require("mongoose");

const IssueBook = new mongoose.Schema({
  issueId: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  memberId: {
    type: String,
    required: true,
  },
  isbnNumber: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const issueBookModel = mongoose.model("issueBook", IssueBook);
module.exports = issueBookModel;
