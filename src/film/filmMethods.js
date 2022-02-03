const mongoose = require("mongoose")
const { argv } = require("yargs")
const FilmModel = require("./filmModel")

// ADD MOVIE
exports.addMovie = async (newFilm) => {
    try {
        let movie = new FilmModel(newFilm)
        await movie.save()
        console.log(`Movie added: "${argv.title}" with ${argv.actor}`)
    }
    catch (error) {
        console.log(error)
    }
}

// LIST ALL MOVIES
exports.listMovie = async () => {
    try {
        const listResult = await FilmModel.find()
        console.log(listResult)
    }
    catch (error) {
        console.log(error)
    }
}

// UPDATE MOVIE
exports.updateMovie = async () => {
    try {
        if (argv.newtitle) {
            await FilmModel.updateOne(
                { title: argv.title },
                { $set: { title: argv.newtitle } }
            )
            console.log(`Movie title updated: from "${argv.title}" to "${argv.newtitle}"`)
        }
        else if (argv.newactor) {
            await FilmModel.updateOne(
                { actor: argv.actor },
                { $set: { actor: argv.newactor } }
            )
            console.log(`Movie actor updated: from ${argv.actor} to ${argv.newactor}`)
        }
        else if (argv.newgenre) {
            await FilmModel.updateOne(
                { title: argv.title },
                { $set: { genre: argv.newgenre } }
            )
            console.log(`Movie "${argv.title}" genre updated: ${argv.newgenre}`)
        }
        else if (argv.newrating) {
            await FilmModel.updateOne(
                { title: argv.title },
                { $set: { rating: argv.newrating } }
            )
            console.log(`Movie "${argv.title}" rating updated: ${argv.newrating}`)
        }
    }
    catch (error) {
        console.log(error)
    }
}

// DELETE MOVIE
exports.deleteMovie = async () => {
    try {
        await FilmModel.deleteOne(
            { title: argv.title,
            actor: argv.actor }
        )
        console.log(`Movie deleted: "${argv.title}" with ${argv.actor}`) 
    }
    catch (error) {
        console.log(error)
    }
}