const mongoose = require("mongoose");

require("dotenv").config();

const db = () => {

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,  
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {          
        console.error("Problem with database:", error.message);
        process.exit(1);
    });
};

module.exports = db;
