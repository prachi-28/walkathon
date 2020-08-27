const express = require("express")
const router = express.Router();
const reg = require("./register")

router.post("/register", reg.add);

module.exports = router;    