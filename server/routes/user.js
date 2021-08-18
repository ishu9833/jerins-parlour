const express = require("express");
const router = express.Router();

const { signin, signup, sayHi } = require("../controllers/user");



router.get('/home', sayHi)
router.post("/signin", signin);
router.post("/signup", signup);

module.exports =  router;
