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
                year: argv.year,
                actor: argv.actor,
                genre: argv.genre,
                rating: argv.rating,
            })
        }
        // LIST ALL MOVIES 
        // Syntax    ===>   --list
        // Filtered  ===>   --list --filter="<value>"
        // Filter    ===>   title, year, actor, newgenre, newrating
        else if (argv.list) {
            await listMovie()
        }
        // UPDATE MOVIE 
        // Syntax    ===>   --update --title="<title>" --year=<year> --property="<new value>"
        // Property  ===>   newtitle, newyear, newactor, newgenre, newrating
        else if (argv.update) {
            await updateMovie()
        }
        // DELETE MOVIE
        // Requires title and year
        // Syntax    ===>   --delete --title="<title>" --year=<year>
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