require("dotenv").config()
const mongoose = require("mongoose")

// const client = new MongoClient(url of database);
// const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    }
    catch (error) {
        console.log(error)
    }
}

connection()