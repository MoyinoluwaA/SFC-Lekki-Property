const mongoose = require("mongoose")
require("dotenv/config");

const connectDB = mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((response) => console.log("Database connected successfully"))
    .catch((err) => console.log(err))

module.exports = connectDB
