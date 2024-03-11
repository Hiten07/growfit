const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;


const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connected Succesfully !");
    } catch (error) {
        console.error("Database Connection Failed");
        console.log(error)
        process.exit(0);
    }
}

module.exports = connectDb;