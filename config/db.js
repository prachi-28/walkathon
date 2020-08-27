
const mongoose = require("mongoose")
require("dotenv").config()

let exp = {};

exp.db = async () => {
    await mongoose.connect(process.env.DB,
        { useNewUrlParser: true,
         useUnifiedTopology: true },
        () => {
            console.log('Connected to DB')
        })
};

module.exports = exp;