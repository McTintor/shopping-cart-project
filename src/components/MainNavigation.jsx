import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className={classes.header}>
      <nav className={classes.navi}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Cart({totalQuantity})
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;