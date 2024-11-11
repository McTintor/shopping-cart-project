import { DUMMY_CARS } from "../DUMMY_CARS"
import './Cart.css'

export default function Cart () {
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
                <div className="cart-item">
                        <img  className="width" src={DUMMY_CARS[0].url} alt="Car 1" />
                        <p className="width">{DUMMY_CARS[0].title}</p>
                        <p className="width">{DUMMY_CARS[0].price}€</p>
                        <div className="item-amount width">
                            <button className="amount-btn">➕ </button>
                            <p> 11111 </p>
                            <button className="amount-btn"> ➖</button>
                        </div>
                        <p className="width">total</p>
                        <span className="width"><button className="delete width">Delete 🗑️</button></span>
                </div>
                <div className="cart-item">
                        <img  className="width" src={DUMMY_CARS[0].url} alt="Car 1" />
                        <p className="width">{DUMMY_CARS[0].title}</p>
                        <p className="width">{DUMMY_CARS[0].price}€</p>
                        <div className="item-amount width">
                            <button className="amount-btn">➕ </button>
                            <p> 11111 </p>
                            <button className="amount-btn"> ➖</button>
                        </div>
                        <p className="width">total</p>
                        <span className="width"><button className="delete width">Delete 🗑️</button></span>
                </div>
                <div className="cart-item">
                        <img  className="width" src={DUMMY_CARS[0].url} alt="Car 1" />
                        <p className="width">{DUMMY_CARS[0].title}</p>
                        <p className="width">{DUMMY_CARS[0].price}€</p>
                        <div className="item-amount width">
                            <button className="amount-btn">➕ </button>
                            <p> 11111 </p>
                            <button className="amount-btn"> ➖</button>
                        </div>
                        <p className="width">total</p>
                        <span className="width"><button className="delete width">Delete 🗑️</button></span>
                </div>
                <div className="cart-item">
                        <img  className="width" src={DUMMY_CARS[0].url} alt="Car 1" />
                        <p className="width">{DUMMY_CARS[0].title}</p>
                        <p className="width">{DUMMY_CARS[0].price}€</p>
                        <div className="item-amount width">
                            <button className="amount-btn">➕ </button>
                            <p> 11111 </p>
                            <button className="amount-btn"> ➖</button>
                        </div>
                        <p className="width">total</p>
                        <span className="width"><button className="delete width">Delete 🗑️</button></span>
                </div>
                <div className="cart-item">
                        <img  className="width" src={DUMMY_CARS[0].url} alt="Car 1" />
                        <p className="width">{DUMMY_CARS[0].title}</p>
                        <p className="width">{DUMMY_CARS[0].price}€</p>
                        <div className="item-amount width">
                            <button className="amount-btn">➕ </button>
                            <p> 11111 </p>
                            <button className="amount-btn"> ➖</button>
                        </div>
                        <p className="width">total</p>
                        <span className="width"><button className="delete width">Delete 🗑️</button></span>
                </div>
                <div className="cart-item">
                        <img  className="width" src={DUMMY_CARS[0].url} alt="Car 1" />
                        <p className="width">{DUMMY_CARS[0].title}</p>
                        <p className="width">{DUMMY_CARS[0].price}€</p>
                        <div className="item-amount width">
                            <button className="amount-btn">➕ </button>
                            <p> 11111 </p>
                            <button className="amount-btn"> ➖</button>
                        </div>
                        <p className="width">total</p>
                        <span className="width"><button className="delete width">Delete 🗑️</button></span>
                </div>
                <div className="total"><h3>Total: total</h3></div>
                <div className="to-checkout">Proceed to Checkout: <button className="ok">OK</button></div>
            </div>
        </>
    )
}