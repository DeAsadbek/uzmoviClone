const express = require("express");
const multer = require("../middleWare/multer").single("photo");
const dbSchema = require("../model/Schema");
const router = express.Router();

router.get("/movies/add", (req, res) => {
    res.render("add", {
        title: "Add Data Page",
        button: "Film Qo'shish"
    });
});

router.post("/movies/add", multer, (req, res) => {
    const db = new dbSchema({
        name: req.body.name,
        janri: req.body.janri,
        photo: req.file.path,
        imdb_score: req.body.imdb_score,
        til: req.body.til,
        country: req.body.country,
        year: req.body.year,
        "comments.view": req.body.view,
        category: req.body.category
    });

    db.save((err, data) => {
        if (err) {
            console.log(err, "/movies/add xatolik bor");
        } else {
            res.redirect("/");
            // res.json(data);
            console.log(data);
        }
    });
});

module.exports = router;