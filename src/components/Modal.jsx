import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { cartActions } from "../store/cart-slice";
import { authActions } from "../store/auth-slice";
import './Modal.css'

export default function Modal() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(cartActions.clearCart());
        dispatch(authActions.reset());
        navigate('/');
    }

    const Cars = useSelector((state) => state.cart.cars);
    const totalPrice = useSelector((state) => state.cart.cartTotal);
    const totalAmount = useSelector((state) => state.cart.totalQuantity);

    return (
        <>
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>Order Complete! <br /><br />Your Cars are being shipped tomorrow. <br /><br /><br /> Order details: <br /><br /></h2>
                <ul>
                    {Cars.map((car) => (
                        <li key={car.id}>
                            {car.title} x {car.amount} ({car.totalPrice} €)
                        </li>
                    ))}
                </ul>
                <p>Amount of items: {totalAmount}</p>
                <p>Total Price: {totalPrice} €</p>
            <button className="modal-button" onClick={handleClick}>OK</button>
            </div>
        </div>
        </>
    )
}