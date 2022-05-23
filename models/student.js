const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  rollNumber: String,
  department: String,
  borrowedBooks: [String],
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
