const express = require('express')
const app = express()
const mongoose = require('mongoose')
const OrderModel = require('./models/orders')

const cors = require('cors') // allows to connect api with the react frontend

// connect to mongoDB
const dbURI = `mongodb+srv://netmarcus:test1234@cluster0.cb0tpt3.mongodb.net/Online-Order?retryWrites=true&w=majority`;
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

// need this to parse data as json file
app.use(express.json());

// need this to connect with frontend
app.use(cors());

// app.get("/api", (req, res) => {
//     res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
// })

//Practice get and post requests (tested using Thunder Client extension on vscode)
app.get("/test", (req, res) => {
    console.log("Get request: test")
})
app.post("/createOrder", async (req, res) => {
    const order = req.body; // .body is built in and passes the data as an object?
    const newOrder = new OrderModel(order);
    await newOrder.save(); // await key word because async function, .save() adds to database

    res.json(order); // sends this back to frontend
})



app.use((req, res, next) => {
    console.log('in the next middleware');
    next(); 
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
}) 