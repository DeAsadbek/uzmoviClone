const express = require("express");
const router = express.Router();

// index get 
router.get("/treyler", (req, res) => {
    res.render("treyler", {
        title: "Treylerlar Uzbek tilida"
    });
});

router.post("/treyler", (req, res) => {
    res.send("home page post method");
});

module.exports = router