// server create
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = 3000;

// routes module exports 
const index = require("./routes/index");
const addData = require("./routes/add");
const serial = require("./routes/serial");
const treyler = require("./routes/treyler");
const konsert = require("./routes/konsert");


// dataBase
const dataBase = require("./md/db");

const app = express();

// dataBase settings
mongoose.connect(dataBase.db);
const db = mongoose.connection;
db.on("open", () => {
    console.log("Mongoose Run");
});

db.on("error", (err) => {
    console.log("Mongoose Error", err);
});


// engine technology settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// routes settings
app.use(index);
app.use(addData);
app.use(serial);
app.use(treyler);
app.use(konsert);

// cookie-parser, public and more
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "public")));


//  server listen.The server is started.
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});