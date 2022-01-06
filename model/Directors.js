const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directors = new Schema({
    name: {
        type: String,
        required: true
    },
    username: String,
    surname: String,
    email: String,
    password: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
    // photo: String
});

module.exports = mongoose.model("director", directors);