const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/node-ddd");

const PORT = 3000;

const app = express();

app.use(helmet());

app.get("/", (req, res) => {
    res.send("Vai tomar no meio do olho do seu cu pau no cu");
})

app.listen(PORT);