const express = require("express");

const app = express();

app.use(express.json()); 

const {register,login} = require("./controllers/auth.controller");

app.post("/login", login);

app.post('/register', register);

module.exports = app;