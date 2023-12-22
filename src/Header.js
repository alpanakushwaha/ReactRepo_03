import { LOGO_IMG_SRC } from "../utils/constants";
const Title = () => (
  <h1 id="title" key="h4">
    <a href="kuchbhi!!">
      <img src={LOGO_IMG_SRC} height="100px"></img>
    </a>
  </h1>
);

const Header = () => {
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
    </div>
  );
};

export default Header;
