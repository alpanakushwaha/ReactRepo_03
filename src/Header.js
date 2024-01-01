import { useState } from "react";
import { LOGO_IMG_SRC } from "../utils/constants";
import Logo from "../assets/img/Food-villa-cafe-logo.jpg";
import { Link } from "react-router-dom";

const Title = () => (
  <h1 id="title" key="h4">
    <a href="kuchbhi!!">
      <img src={LOGO_IMG_SRC} height="100px"></img>
    </a>
  </h1>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <Title />

      <div className="nav-items">
        <ul>
          <Link to="/#">
            <li id="home">Home</li>
          </Link>
          <Link to="/about">
            <li id="about">About</li>
          </Link>
          <Link to="/contact">
            <li id="contact">Contact</li>
          </Link>
          <Link to="/cart">
            <li id="cart">Cart</li>
          </Link>
        </ul>
      </div>

      {isLoggedIn ? (
        <button id="logout-btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button id="login-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
