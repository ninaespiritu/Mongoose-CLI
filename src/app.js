require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { addMovie, listMovie, deleteMovie, updateMovie } = require("./film/filmMethods");
const argv = yargs(hideBin(process.argv)).argv;


const app = async () => {
    try {
        // ADD MOVIE
        if (argv.add) {
            await addMovie({
                title: argv.title,
                actor: argv.actor,
                genre: argv.genre,
                rating: argv.rating,
            })
        }
        // LIST ALL MOVIES 
        // List all: --list
        // List by Title: --list ==title="<title>"
        // List by Actor: --list ==actor="<actor>"
        // List by Genre: --list ==genre="<genre>"
        // List by Rating: --lsit ==rating=<rating>
        else if (argv.list) {
            await listMovie()
        }
        // UPDATE MOVIE 
        // Update Title: --update --title="<title>" --newtitle="<newtitle>"
        // Update Actor: --update --actor="<actor>" --newactor="<newactor>"
        // Update Genre: --update --title="<title>" --newgenre="<newgenre>"
        // Update Rating: --update --title="<title>" --newrating="<newrating>"
        else if (argv.update) {
            await updateMovie()
        }
        // DELETE MOVIE
        // Requires title and actor: --delete --title="<title>" --actor="<actor>"
        else if (argv.delete) {
            await deleteMovie()
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