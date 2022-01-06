const express = require("express");
const dbSchema = require("../model/Schema");
const router = express.Router();

// index get 
router.get("/", (req, res) => {
    dbSchema.find({}, (err, data) => {
        if (err) console.log(err, "Index.js da xato movies Not Found..");
        else {
            res.render("index", {
                title: "Uzmovi.com Tarjima Kinolar.",
                dataBase: data,
                data
            });
        }
    });
});

// movies search setting
router.get("/search", (req, res) => {
    // console.log(req.query);
    let {
        search
    } = req.query;

    const textLowerCase = search.toLowerCase();
    // console.log(textLowerCase)

    dbSchema.find({
        name: {
            $regex: textLowerCase
        }
    }, (err, data) => {
        if (data == "") {
            res.redirect("/");
        } else {
            res.render("index", {
                title: "Uzmovi.com Tarjima Kinolar.",
                dataBase: data,
                data
            });
        }
    });
});

router.get("/xSearch/marvel", (req, res) => {
    dbSchema.find({}, (err, data) => {
        if (err) {
            console.log(err, "Err");
        } else {
            res.render("movies", {
                title: "Marvel Kinolari",
                datas: data,
                data
            });
            // console.log(data);
        }
    });
});


router.post("/", (req, res) => {
    res.send("home page post method");
});

module.exports = router