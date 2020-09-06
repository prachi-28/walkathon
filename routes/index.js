const express = require("express")
const router = express.Router();
const reg = require("./register")

router.post("/register", reg.add);
router.get("/",(req, res) => {
    res.render("index.html");
})

// router.get("", (req, res) => {
//     res.redirect("/")
// })
module.exports = router;    