const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const db = new Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    janri: String,
    photo: String,
    imdb_score: Number,
    til: String,
    country: String,
    year: Number,
    comments: {
        view: {
            type: Number,
            default: 0
        },
        like: {
            type: Number,
            default: 0
        }
    },
    dirUser: String
});

module.exports = mongoose.model("movies", db);