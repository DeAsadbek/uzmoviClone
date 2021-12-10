const express = require("express");
const router = express.Router();

// index get 
router.get("/", (req, res) => {
    res.render("index", {
        title: "Uzmovi.com Tarjima Kinolar.",
        page: "PREMYERA",
        page1: "tarjima kinolar",
        page2: "Bizga qo'shiling",
        page3: "Tasodifiy filmlar",
        page4: "O'zbek kinolar",
        page5: "Hind kinolar"
    });
});

router.post("/", (req, res) => {
    res.send("home page post method");
});

module.exports = router