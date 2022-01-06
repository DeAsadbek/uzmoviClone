const express = require("express");
const userSchema = require("../model/Directors");
const router = express.Router();

router.get("/login/create", (req, res) => {
    res.render("signup", {
        title: "Create Account"
    });
});

router.post("/login/create", (req, res) => {
    res.render("signup", {
        title: "Create Account"
    });
});

module.exports = router;