const express = require("express")
const router = express.Router()

const {text,login} = require("../controllers/app")

router.get("/",text)
router.post("/login",login)

module.exports = router;