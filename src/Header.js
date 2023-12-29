import { useState } from "react";
import { LOGO_IMG_SRC } from "../utils/constants";
import Logo from "../assets/img/Food-villa-cafe-logo.jpg";

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
          <li id="home">Home</li>
          <li id="about">About</li>
          <li id="contact">Contact</li>
          <li id="cart">Cart</li>
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
