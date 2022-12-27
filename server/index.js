const express = require("express");
const cors = require("cors");
const axios = require("axios")
require("dotenv").config();

const db = require('../config/db.config');

const app = express();

const port = 3000;


db.sequelize.sync({ force: 0 }).then(() => {
    console.log("Database connection established with success")
})

app.listen(port, () => {
    console.log(`listeningon port ${port}`);
});