const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
    res.send("Welcome to the homepage");
})

app.get("/fruits", (req, res) => {
    res.sendFile("/Users/sanjeevmidda/Desktop/local server/fruitsDB.json");
})

app.listen(PORT, (req,res) => {
    console.log("Server is up and running on port: " + PORT)
})