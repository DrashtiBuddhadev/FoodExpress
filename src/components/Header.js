import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <span className="logoText">Food-Express</span>
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About-Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact-Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              Cart({cartItems.length})
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                btnName === "login"
                  ? setBtnName("LogOut")
                  : setBtnName("Login");
              }}
              className="loginButton"
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
