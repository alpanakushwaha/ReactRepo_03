import React from "react";
import ReactDOM from "react-dom/client";

let root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => (
  <h1 id="title" key="h4">
    <a href="kuchbhi!!">
      <img
        src="https://play-lh.googleusercontent.com/6Rtu_ByTy5D33f5IV6Js_BYFuavjnPyh7GPQeCNfNrgGpHeBYTIyp-9OhCdVfyUYMw"
        height="100px"
      ></img>
    </a>
  </h1>
);

// React Component

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

const styleObj = { backgroundColor: 'grey' };
const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">
        <input id="input-search" type="text" style={styleObj}></input>
        <button id="search-btn">Search</button>
      </div>
      <div id="restaurantList">
        <div id="restaurantCard">
          <img
            id=""
            src="https://thumbs.dreamstime.com/b/people-eating-healthy-meals-wooden-table-top-view-food-delivery-people-eating-healthy-meals-wooden-table-food-delivery-160387494.jpg"
            height="150px"
          ></img>
          <h4 id="name">Time Traveller</h4>
          <h4 id="rating">5/5</h4>
          <h4 id="cuisines">Indian, International, Asian</h4>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <a href="">Links</a>
      <p>©FoodVilla </p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
