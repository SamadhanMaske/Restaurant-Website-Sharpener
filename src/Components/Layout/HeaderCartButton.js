import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon"
import { useContext } from 'react'
import CartContext from '../../Store/Cart-Context'


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currNum, item)=>{
        return currNum + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClickButton}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )

}

export default HeaderCartButton