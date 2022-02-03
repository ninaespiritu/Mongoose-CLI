require("./db/connection")
const mongoose = require("mongoose")
const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const { addMovie, listMovie } = require("./film/filmMethods")
const argv = yargs(hideBin(process.argv)).argv 


const app = async () => {
    try {
        if (argv.add) {
            await addMovie({
                title: argv.title,
                actor: argv.actor,
            })
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

app()