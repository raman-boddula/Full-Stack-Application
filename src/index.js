const express = require("express");

const app = express();

app.use(express.json()); 

const artistController = require("./controllers/artist.controller");

app.use("/users/", artistController);

module.exports = app;