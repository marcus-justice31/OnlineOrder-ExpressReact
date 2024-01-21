const express = require('express')
const app = express()
const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://netmarcus:test1234@cluster0.cb0tpt3.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

// runs the async function
connect();

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
}) 