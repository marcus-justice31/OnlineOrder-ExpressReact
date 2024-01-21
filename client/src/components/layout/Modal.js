import { Fragment } from "react"
import styles from './Modal.module.css'
import { createPortal } from "react-dom"
import Cart from "../cart/Cart"

// NOTE: Portals are used to have display window/element on top of the page
const Modal = (props) => {
  return (
    <Fragment>
        { createPortal(
            <div onClick={props.onClose} className={styles.backdrop}/>,
            document.getElementById('overlay-root')
        )}
        { createPortal(
            <div className={styles.cartModal}>
                <Cart onClose={props.onClose}/>
            </div>,
            document.getElementById('overlay-root')
        ) }
    </Fragment>
  )
}

export default Modal