import companyLogo from "../../app-logo.png";

const Header = () => {
    return (
      <div className="navbar">
        <div className="nav-logo-container">
          <img className="nav-logo" src={companyLogo} alt="app-logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;
