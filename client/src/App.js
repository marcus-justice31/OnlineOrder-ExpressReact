import React, { useEffect, useState } from 'react'
import Header from './components/layout/Header';
import MenuItems from './components/itemCard/MenuItems';
import CartProvider from './context/CartProvider';
import Modal from './components/layout/Modal';

import { PayPalScriptProvider } from "@paypal/react-paypal-js"

function App() {
  const [toggleCart, setToggleCart] = useState(false)

  const toggleCartHandler = () => {
    setToggleCart(prevState => !prevState)
  }
  const closeCartHandler = () => {
    setToggleCart(false)
  }

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then( // can do this because we specified the proxy in the package.json to be localhost:5000
  //     response => response.json(),
  //     console.log("api fetched")
  //     ).then(
  //       data => {
  //         setBackendData(data)
  //       }
  //     )
  // }, []) // passed in an empty array so it only runs on the first render of the component

  return (
    <CartProvider>
      <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, currency: 'CAD'}}>
        { toggleCart && <Modal onClose={closeCartHandler} /> }
        <Header onToggle={toggleCartHandler}/>
        <MenuItems/>
      </PayPalScriptProvider>
    </CartProvider>
    // <div>
    //   {(typeof backendData.users == 'undefined') ? (
    //     <p>Loading...</p>
    //   ): (
    //     backendData.users.map((user, i) => (
    //       <p key={i}>{user}</p>
    //     ))
    //   )}
    // </div>
  )
}

export default App