import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../app-logo.png";
import CartContext from "../utils/CartContext";
import ThemeContext from "../utils/ThemeContext";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const [newTheme, setNewTheme] = useContext(ThemeContext);
  const [cartValue] = useContext(CartContext);

  const status = useOnlineStatus();
  
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
            Online Status: {status ? '✅' : '🔴'}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/accordion">Accordion</Link>
          </li>

          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
              Cart-{cartValue}
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

        <button
          className="button-85"
          role="button"
          onClick={() => {
            setNewTheme(newTheme === "Dark" ? "Light" : "Dark");
            // adding classes for light and dark
            const body = document.querySelector("body");
            newTheme === "Dark" ? body.classList.add("dark") : body.classList.remove("dark")
          }}
        >
          <span className="text">{newTheme}</span>
        </button>
      </div>
    

    </div>
  );
};

export default Header;
