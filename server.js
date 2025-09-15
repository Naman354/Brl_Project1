const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());

const routes = require("./routes/Routes");
app.use("/api", routes);

app.listen(PORT , ()=> {
    console.log("The server is started");
});

const db = require("./config/database");

db();

app.get('/' , (req, res)=> {

    res.send(
        "<h1> This is the default route</h1>"
    );

})
