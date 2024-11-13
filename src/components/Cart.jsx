import './Cart.css'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Cart () {

    const Cars = useSelector((state) => state.cart.cars);
    const cartTotalPrice = useSelector((state) => state.cart.cartTotal);

    return (
        <>
            <div className="cart-container">
                <h2>Your Items:</h2>
                    <div className="cart-info">
                    <div className="space width"></div>
                    <p className="width">Car</p>
                    <p className="width">Price</p>
                    <p className="width">Amount</p>
                    <p className="width">Total Cost</p>
                    <div className="space width"></div>
                </div>
                {Cars.map((car) => (
                    <CartItem key={car.id} id={car.id} title={car.title} price={car.price} amount={car.amount} totalPrice={car.totalPrice} url={car.url}/>
                ))}
                <div className="total"><h3>Cart Total: {cartTotalPrice} €</h3></div>
                <div className="to-checkout">Proceed to Checkout: <Link className='ok' to='/checkout'>OK</Link></div>
            </div>
        </>
    )
}