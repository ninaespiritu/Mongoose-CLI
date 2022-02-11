require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { addMovie, listMovie, listOne, deleteMovie, updateMovie, deleteAll } = require("./film/filmMethods");
const argv = yargs(hideBin(process.argv)).argv;


const app = async () => {
    try {
        // ADD MOVIE
        if (argv.add) {
            await addMovie({
                title: argv.title,
                year: argv.year,
                actor: argv.actor,
                genre: argv.genre,
                rating: argv.rating,
            })
        }
        // LIST MOVIE
        else if (argv.listOne) {
            await listOne()
        }
        // LIST ALL MOVIES 
        else if (argv.list) {
            await listMovie()
        }
        // UPDATE MOVIE 
        else if (argv.update) {
            await updateMovie()
        }
        // DELETE MOVIE
        else if (argv.delete) {
            await deleteMovie()
        }
        // DELETE ALL MOVIES
        else if (argv.deleteAll) {
            await deleteAll()
        }
        else {
            console.log("Wrong command")
        }
        mongoose.connection.close()
    }
    catch (error) {
        console.log(error)
    }
}

app();