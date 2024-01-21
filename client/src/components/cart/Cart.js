import styles from './Cart.module.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import CartItem from './CartItem'
import PaypalCheckoutButton from './PaypalCheckoutButton'


const Cart = (props) => {
    const contextItems = useContext(CartContext)

    const subtotal = `$${contextItems.total.toFixed(2)}` // Uses 2 decimal places
    const valSubTotal = contextItems.total.toFixed(2)

    const handleClearItems = () => {
        contextItems.clearItems()
    }
    // NOTE: for some reason it adds another of the same item in the cart instead of just updating the quantities...
    const handleIncrements = (itemId) => {
        const item = contextItems.items.find(item => item.id === itemId)
        if (item) { // If the item exists.
            const updatedItem = {...item, quantity: 1}
            contextItems.addItem(updatedItem)
        }
    }
    const handleDecrements = (id) => {
        contextItems.removeItem(id)
    }
    return (
        <div className={styles.cartContainer}>
            <header className={styles.cartHeader}>
                <button onClick={props.onClose} className={styles.cartCloseBtn}>
                    &times;
                </button>
                <h2>Cart</h2>
                <button onClick={handleClearItems} className={styles.cartClear}>
                    Clear All
                </button>
            </header>
            <div className={styles.cartItemsContainer}>
                { contextItems.items.length === 0 ? (
                    <p>There are no items in the cart</p>
                ) : (
                    <ul className={styles.cartItems}>
                        { contextItems.items.map((item) => {
                            return <CartItem 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            quantity={item.quantity}
                            onAdd={() => handleIncrements(item.id)}
                            onRemove={() => handleDecrements(item.id)}
                        />
                        })}
                    </ul>
                )}
                <div className={styles.total}>
                    <span>Total</span>
                    <span>{subtotal}</span>
                </div>
                <div className={styles.cartDevider}></div>
                <div className="paypal-button-container">
                    <PaypalCheckoutButton subtotal={valSubTotal} /> 
                </div>
                {/* <a href="https://www.altcademy.com/blog/how-to-add-hyperlink-to-button-in-reactjs/#:~:text=router%2Ddom%20library.-,Method%201%3A%20Using%20the%20a%20tag,%3E%20Click%20me!">
                    <button className={styles.checkoutBtn}>Check Out</button>
                </a> */}
            </div>
        </div>

    )
}

export default Cart