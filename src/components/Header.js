import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="flex justify-start">
          <li className="px-2">onlineStatus:{onlineStatus ? "🟩" : "🟥"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li className="px-2">Cart</li>
          <button
            className="w-10 bg-green-400 "
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
