import styles from './QuantityController.module.css';
import { Fragment, forwardRef } from 'react'

const QuantityController = forwardRef((props, ref) => {
  return (
    <Fragment>
        <button onClick={props.onDecrease} className={styles['quantity__btn']}>-</button>
        <input
            type='number'
            min='1'
            ref={ref}
            value={props.quantityNumber}
            onChange={props.onChange}
            className={styles['quantity__number']} 
        />
        <button onClick={props.onIncrease} className={styles['quantity__btn']}>+</button>

    </Fragment>
  )
})

export default QuantityController