const mongoose = require("mongoose");

const CandidateSchema = mongoose.Schema({
    name: String,
    contact: String,
    email: String,
    address: String,
    state: String,
    country: String,
    occup: String,
    category: String,
    type: Number,
});

module.exports = mongoose.model("Candidates", CandidateSchema);