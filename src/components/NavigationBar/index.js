import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase";
import { CartDropdown } from "../CartDropdown";
import { CartIcon } from "../CartIcon";

import "./styles.css";

const NavigationBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { dropdown } = useSelector((state) => state.cart);

  // const { dropdown } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="">
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              LOG OUT
            </span>
          ) : (
            <Link className="nav-link" to="/LogIn">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {dropdown && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
