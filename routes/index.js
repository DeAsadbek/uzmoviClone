const express = require("express");
const router = express.Router();

// index get 
router.get("/", (req, res) => {
    res.render("index", {
        title: "Uzmovi.com Tarjima Kinolar."
    });
});

router.post("/", (req, res) => {
    res.send("home page post method");
});

module.exports = router