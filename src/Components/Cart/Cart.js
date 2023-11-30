import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../Store/Cart-Context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasIems = cartCtx.items.length > 0;
     
    const cartItemRemoveHandler = (id)=>{
        cartCtx.removeItem(id);
    }

    const cartIemAddHandler = (item)=>{
        cartCtx.addItem(item);
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
        {
            cartCtx.items.map((item) => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartIemAddHandler.bind(null, item)}/>)
        }
    </ul>
    );

    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasIems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart