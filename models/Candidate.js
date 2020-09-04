const mongoose = require("mongoose");

const CandidateSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    contact:
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    type: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Candidates", CandidateSchema);