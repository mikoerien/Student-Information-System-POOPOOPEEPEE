const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        First: { type: String, required: true },
        Last: { type: String, required: true },
        Middle: { type: String, required: true },
        Email: { type: String, required: true, unique: true },
        Password: { type: String, required: true },
        
    },
    { collection: "student-data" }
    );

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;