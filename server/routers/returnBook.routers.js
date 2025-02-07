const express = require("express");
const returnBookMg = require("../models/returnBook.Models");

const router = express.Router();

// ! return Book data save
router.post("/libraryBk/returnBookSave", async (req, res) => {
  console.log("Received Data: ", req.body);

  try {
    let returnBookSave = new returnBookMg(req.body);
    await returnBookSave.save();
    return res.status(200).json({
      success: "return Book is saved successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

// ! update return book by ID
router.put("/libraryBk/returnBookId/:id", async (req, res) => {
  try {
    const updateReturnBook = await returnBookMg.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updateReturnBook) {
      return res.status(400).json({
        message: "return books not found",
      });
    }

    return res.status(200).json({
      success: "return books updated successfully",
      content: updateReturnBook,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

//! get all return books
router.get("/libraryBk/getAllReturnBooks", async (req, res) => {
  try {
    const getAllReturnBooks = await returnBookMg.find().exec();
    return res.status(200).json({
      success: true,
      content: getAllReturnBooks,
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

// ! Delete books by ID
router.delete("/libraryBk/deleteReturnBook/:id", async (req, res) => {
  try {
    const deleteReturnBook = await returnBookMg.findByIdAndDelete(
      req.params.id
    );
    if (!deleteReturnBook) {
      return res.status(404).json({
        message: "return Book is not found",
      });
    }
    return res.json({
      message: "return Book is delete successfully",
    });
  } catch (err) {
    return res.status(400).json({
      message: "return book delete unsuccessful",
      error: err,
    });
  }
});

//! get Book by ID
router.get("/libraryBk/getReturnBookId/:id", (req, res) => {
  const id = req.params.id;
  returnBookMg
    .findById(id)
    .then((returnBook) => {
      if (!returnBook) {
        return res.status(404).json({ error: "return Book not found" });
      }
      res.json(returnBook);
    })
    .catch((err) => {
      console.error("Error fetching book: ", err);
      res.status(500).json({ error: "Sever error" });
    });
});

// ! Get Book By returnID
router.get("/libraryBk/getReturnBookByReturnId/:returnId", async (req, res) => {
  const returnId = req.params.returnId; // Ensure the parameter name matches the route definition

  try {
    // Use the correct field name (`returnId`) in the query
    const returnBook = await returnBookMg.find({
      returnId: { $regex: new RegExp(returnId, "i") }, // Case-insensitive search
    });

    // Check if any results were found
    if (returnBook.length === 0) {
      return res
        .status(404)
        .json({ error: "No return books found with that returnId" });
    }

    // Return the result
    res.json(returnBook);
  } catch (err) {
    console.error("Error fetching return books: ", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
