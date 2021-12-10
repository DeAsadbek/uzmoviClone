const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const db = new Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    photo: String,
    imdb_score: {
        type: Number,
        default: 0
    },
    country: String,
    year: Number
});

module.exports = mongoose.model("movies", db);