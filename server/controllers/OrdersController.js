const Order = require('../models/orders');

const order_create = (req, res) => {
    console.log(req.body); // can see the output of what req.body produces
    const order = new Order(req.body);

    order.save()
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
   order_create
}