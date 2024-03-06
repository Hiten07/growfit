const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Welcome from express router");
});

router.get("/register", (req, res) => {
    res.status(200).send("Welcome from express register router");
});

module.exports = router;