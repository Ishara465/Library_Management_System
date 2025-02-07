const express = require("express");
const issueBook = require("../models/IssueBook.Models");

const router = express.Router();

// ! issueBook data save
router.post("/libraryBk/issueBookSave", async (req, res) => {
  console.log("Received Data: ", req.body);

  try {
    let issueBookSave = new issueBook(req.body);
    await issueBookSave.save();
    return res.status(200).json({
      success: "issue Book is saved successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

// ! update issue Book by ID
router.put("/libraryBk/issueBookUpdate/:id", async (req, res) => {
  try {
    const issueBookUpdate = await issueBook.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!issueBookUpdate) {
      return res.status(400).json({
        message: "issue book not found",
      });
    }

    return res.status(200).json({
      success: "issue book updated successfully",
      content: issueBookUpdate,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// ! get all issue book

router.get("/libraryBk/getAllIssueBooks", async (req, res) => {
  try {
    const getAllIssueBooks = await issueBook.find().exec();
    return res.status(200).json({
      success: true,
      content: getAllIssueBooks,
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

// ! delete issue Book by ID

router.delete("/libraryBk/deleteIssueBook/:id", async (req, res) => {
  try {
    const deleteIssueBook = await issueBook.findByIdAndDelete(req.params.id);
    if (!deleteIssueBook) {
      return res.status(404).json({
        message: "issue book is not found",
      });
    }
    return res.json({
      message: "issue book is delete successfully",
    });
  } catch (err) {
    return res.status(400).json({
      message: "issue book delete unsuccessfully",
      error: err,
    });
  }
});

// ! get issue book by ID
router.get("/libraryBk/getIssueBook/:id", (req, res) => {
  const id = req.params.id;
  issueBook
    .findById(id)
    .then((issueBook) => {
      if (!issueBook) {
        return res.status(400).json({ error: "issueBook not found" });
      }
      res.json(issueBook);
    })
    .catch((err) => {
      console.error("Error fetching issueBook: ", err);
      res.status(500).json({ error: "Server error" });
    });
});

// ! Get issue Book By IssueId
router.get("/libraryBk/getIssueBookByIssueId/:issueId", async (req, res) => {
  const issueId = req.params.issueId; // Ensure the parameter name matches the route definition

  try {
    // Use a different variable name for the query result to avoid conflict
    const result = await issueBook.find({
      issueId: { $regex: new RegExp(issueId, "i") }, // Use the correct field name `issueId`
    });

    // Check if any results were found
    if (result.length === 0) {
      return res.status(404).json({ error: "No issue found with that Id" }); // Use 404 for "Not Found"
    }

    // Return the result
    res.json(result);
  } catch (err) {
    console.error("Error fetching issueBook ", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
