const express = require("express");
const app = express();
const mongo = require("./config/db")
const path = require("path")
require("dotenv").config();
mongo.db();
app.use(express.json());
app.use(express.urlencoded());
app.use("/",require("./routes/index"))
app.use(express.static(path.join(__dirname,'public')));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server began at PORT ${PORT} `);
})