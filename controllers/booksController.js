const express = require("express");
const router = express.Router();
const db = require("../models/book");

router.get("api/books", (req, res) => {
  db.Book.find({})
    .then((foundBooks) => {
      res.json({
        error: false,
        data: foundBooks,
        message: "Found all books",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Could not find all books",
      });
    });
});

router.get("api/books/:id", (req, res) => {
  db.Book.findById(req.params.id)
    .then((foundBook) => {
      res.json({
        error: false,
        data: foundBook,
        message: "Found one book",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Could not retrieve book",
      });
    });
});

router.post("/api/books", (req, res) => {
  db.Book.create(req.body)
    .then((savedBook) => {
      res.json({
        error: false,
        data: savedBook,
        message: "Saved your book.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Could not save book.",
      });
    });
});

router.delete("/api/books/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Deleted book.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to delete book.",
      });
    });
});

module.exports = router;