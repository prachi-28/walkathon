const express = require("express");
const app = express();
const mongo = require("./config/db")
require("dotenv").config();
mongo.db();
app.use(express.json());
app.use(express.urlencoded());
app.use("/api",require("./routes/index"))

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server began at PORT ${PORT} `);
})