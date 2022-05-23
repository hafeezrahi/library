const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  category: String,
  pages: String,
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
