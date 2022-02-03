const mongoose = require("mongoose")

const filmSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    actor: {
        type: String,
        default: "Actor unknown",
    }
})

const FilmModel = mongoose.model("Movies", filmSchema)

module.exports = FilmModel