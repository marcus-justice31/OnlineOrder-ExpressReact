import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect } from 'react';

import Axios from 'axios';

const PaypalCheckoutButton = (props) => {
    const { subtotal, items, customerName } = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderID) => {
        // Call backend function to fulfill order

        // If response is success
        setPaidFor(true);

        // Example of what I could do after payment is successful: Refresh user's account or subscription status

        // If the response is error
        // setError("Error with payment.")
    };

    // attempt to prevent a double add to the db because if it rerenders it would add twice
    useEffect(() => { 
        if (paidFor) { 
            // Display success message, modal or redirect user to success page
            alert("Thank you for your purchase!");
            // NOTE: might be redundant since I map it out in cart.js but it works for now (think of more efficient way to fix it later)
            const orderData = {
                customerName: customerName, 
                items: items.map(item => ({
                    name: item.name,
                    price: item.price*item.quantity,
                    quantity: item.quantity
                }))
            };
            // POST request to server.js
            Axios.post("http://localhost:5000/createOrder", orderData).then((response) => {
                console.log('added to the database')
            })
        }
    })
    
    if (error) {
        // Display error message, modal or redirect user to error page
        alert(error);
        console.log(error);
    }

    return (
        <PayPalButtons style={{
            color: "silver",
            layout: "horizontal",
            height: 48,
            tagline: false,
            shape: "pill"}}

            onClick={(data, actions) => {
                // Validate on button click, client or server side
            }}
            createOrder={(data, actions) => {
                if (isNaN(subtotal) || subtotal <= 0) { 
                    // Handle invalid subtotal value
                    console.error("Invalid subtotal value");
                    return;
                }
                return actions.order.create({
                    purchase_units: [
                        {
                            // description: subtotal,
                            "amount": {
                                "currency_code": "CAD",
                                "value": subtotal
                              }
                        }
                    ]
                });
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);

                handleApprove(data.orderID);
            }}
            onCancel={() => {
                // Display cancel message, modal or redirect user to cancel page or back to cart
            }}
            onError={(err) => {
                setError(err);
                console.error("PayPal Checkout onError", err);
            }}
        /> 
        
        

    )
}

export default PaypalCheckoutButton;