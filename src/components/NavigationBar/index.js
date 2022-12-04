import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { CartContext } from "../../context/CartContext";
import { userContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase";
import { CartDropdown } from "../CartDropdown";
import { CartIcon } from "../CartIcon";
import "./styles.css";

const NavigationBar = () => {
  const { currentUser } = useContext(userContext);
  const { dorpdown } = useContext(CartContext);

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
        {dorpdown && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
