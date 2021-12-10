const express = require("express");
const router = express.Router();

// konsert get
router.get("/konsert", (req, res) => {
    res.render("konsert", {
        title: "Konsertlar Online Tas-ix"
    });
});

// konsert post
router.post("/konsert", (req, res) => {
    res.send("home page post method");
});

module.exports = router