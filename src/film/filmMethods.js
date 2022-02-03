const mongoose = require("mongoose")
const FilmModel = require("./filmModel")

exports.addMovie = async (newFilm) => {
    try {
        let movie = new FilmModel(newFilm)
        await movie.save()
        console.log("Movie added")
    }
    catch (error) {
        console.log(error)
    }
}