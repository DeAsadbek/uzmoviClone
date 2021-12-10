const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directors = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: String,
    bio: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("director", directors);