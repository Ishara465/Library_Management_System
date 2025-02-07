const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// import routers
const book = require("./routers/books.routers");
const member = require("./routers/member.routers");
const issueBook = require("./routers/issueBook.routers");
const returnBook = require("./routers/returnBook.routers");

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// use routers
app.use(book);
app.use(member);
app.use(issueBook);
app.use(returnBook);

// connect to mongodb port and link
const PORT = 5000;
const DB_URL = "mongodb://127.0.0.1:27017/LibraryDB";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Library DB is connected");
  })
  .catch((err) => console.log("Library DB connection error"));

app.listen(PORT, () => {
  console.log(`Library DB is running on ${PORT}`);
});
