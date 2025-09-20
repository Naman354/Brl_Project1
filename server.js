const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const routes = require("./routes/Routes");
app.use("/api", routes);


const db = require("./config/database");

db();

app.listen(PORT , ()=> {
    console.log("The server is started");
});

app.get('/' , (req, res)=> {

    res.send(
        "<h1> This is the default route</h1>"
    );

})
