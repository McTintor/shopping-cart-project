/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { cartActions } from "../store/cart-slice";

export default function CartItem ({ id, url, title, price, amount, totalPrice}) {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(cartActions.increment({
            id, 
            price,  
            title, 
            totalPrice: price, 
            url
        }))
    }

    const handleDecrease = () => {
        dispatch(cartActions.decrement(id))
    }

    return (
        <>
                <div className="cart-item">
                        <img  className="width" src={url} alt={title} />
                        <p className="width">{title}</p>
                        <p className="width">{price} €</p>
                        <div className="item-amount width">
                            <button className="amount-btn" onClick={handleAdd}>➕ </button>
                            <p> {amount} </p>
                            <button className="amount-btn" onClick={handleDecrease}> ➖</button>
                        </div>
                        <p className="width">{totalPrice} €</p>
                        <span className="width"><button className="delete width">Delete 🗑️</button></span>
                </div> 
        </>
    )
}