const express = require("express");
const router = express.Router();

// index get 
router.get("/serial", (req, res) => {
    res.render("serial", {
        title: "Seriallar Uzbek tilida"
    });
});

router.post("/serial", (req, res) => {
    res.send("home page post method");
});

module.exports = router