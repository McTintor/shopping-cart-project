import { useDispatch } from 'react-redux';
import classes from './Checkout.module.css';
import { authActions } from '../store/auth-slice';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import Modal from './Modal';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/cart');
  }

  const Cars = useSelector((state) => state.cart.cars);
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  const totalCost = useSelector((state) => state.cart.cartTotal);
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const confirmOrder = (event) => {
    event.preventDefault();

    dispatch(authActions.confirm());
  };

  return (
    <main className={classes.auth}>
      <section>
        <h2>Your Items:</h2>
            <ol className="itemsol">
              {Cars.map((car) => (
                <li className={classes.checkoutitem} key={car.id}>
                  <p>{car.title}</p>
                  <p>Amount: {car.amount}</p>
                  <p>Total: {car.totalPrice} €</p>
                </li>
              ))}
            </ol>
          <div className={classes.totaldisplay}>
            <p>Total Items: {totalItems}</p>
            <p>Total Cost: {totalCost} €</p>
          </div>
        <form onSubmit={confirmOrder}>
          <h4>Please fill out your information below:</h4>
          <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='Surname'>Last Name</label>
            <input type='text' id='surname' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='number'>Phone Number</label>
            <input type='phone' id='number' required />
          </div>
          <div className={classes.checkoutbuttons}>
            <button type="button" className={classes.checkoutback} onClick={handleNavigate}>🔙</button>
            <button className={classes.checkoutorder}>Confirm Order</button>
          </div>
        </form>
      </section>

      {isAuth && <Modal />}
    </main>
  );
};

export default Checkout;