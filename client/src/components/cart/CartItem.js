import styles from './CartItem.module.css'

const CartItem = (props) => {
    const price = `$${props.price * props.quantity}`
    return <li className={styles.cartItem}>
        <div className={styles.cartDetails}>
            <img src={props.image} alt={props.name} />
            <div className={styles.cartInfo}>
                <h3>{props.name}</h3>
                <span className={styles.price}>{price}</span>
            </div>
        </div>
        <div className={styles.itemQuantity}>
            <button onClick={props.onRemove}>-</button>
            <span>{props.quantity}</span>
            <button onClick={props.onAdd}>+</button>
        </div>
    </li>
}

export default CartItem