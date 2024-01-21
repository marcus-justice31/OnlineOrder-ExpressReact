import styles from '../../components/layout/CartButton.module.css';
import CartIcon from '../../components/cart/CartIcon.js';
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const CartButton = (props) => {
  const cartValue = useContext(CartContext)
  const totalQuantity = cartValue.items.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  return (
    <button onClick={props.onClick} className={styles['cart-container']}>
        <span><CartIcon/></span>
        <span className={styles.badge}>{totalQuantity}</span>
    </button>
  )
}

export default CartButton