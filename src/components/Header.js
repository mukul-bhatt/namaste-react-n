import { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../app-logo.png";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="navbar">
      {/* left */}
      <div className="nav-logo-container">
        <img className="nav-logo" src={companyLogo} alt="app-logo" />
      </div>

      {/* middle */}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
            {/* <a href="/about">ABout us</a> */}
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      {/* right */}

      <div className="nav-login-button-container">
        <button
          className="button-85"
          role="button"
          onClick={() => {
            setbtnName(btnName === "Login" ? "Logout" : "Login");
          }}
        >
          <span className="text">{btnName}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
