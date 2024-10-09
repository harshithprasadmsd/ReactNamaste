import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us</li>
          <li>Contact Us </li>
          <li>Cart</li>
          <button
            class="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logOut") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
