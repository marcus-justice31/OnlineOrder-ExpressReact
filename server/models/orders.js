const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema defines the structure for db
const orderSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true }); // auto assigns timestamp values everytime a new order is created

const Order = mongoose.model('Order', orderSchema); // model variables are typically capitalized
module.exports = Order;
