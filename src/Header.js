import { useState } from "react";
import { LOGO_IMG_SRC } from "../utils/constants";

// const loggedInUser = () => {
//   // API call to check authentication
//   return true;
// };

const Title = () => (
  <h1 id="title" key="h4">
    <a href="kuchbhi!!">
      <img src={LOGO_IMG_SRC} height="100px"></img>
    </a>
  </h1>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("header rendering");
  // const [title2, setTitle2] = useState(
  //   "Kuch nahi change hua. Click the btn at right"
  // );
  return (
    <div className="container">
      <Title />
      {/* <h4>{title2}</h4> */}
      {/* <button
        id="btn_logo_chng"
        onClick={() => setTitle2("Just Checking onClick Btn 😛")}
      >
        Remove Logo
      </button> */}
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
