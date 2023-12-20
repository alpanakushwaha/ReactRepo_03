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

const restaurantList = {
  data: {
    cards: {
      card: [
        {
          name: "Time Traveller two",
          imageSrc:
            "https://thumbs.dreamstime.com/b/people-eating-healthy-meals-wooden-table-top-view-food-delivery-people-eating-healthy-meals-wooden-table-food-delivery-160387494.jpg",
          rating: "4.5/5",
          cuisine: ["Asian", " International", " fast food"],
          cost: "350₹",
          estimatedTimeOfArrival: "25 minutes",
          id: 764,
        },
        {
          name: "Time Traveller three",
          imageSrc:
            "https://thumbs.dreamstime.com/b/people-eating-healthy-meals-wooden-table-top-view-food-delivery-people-eating-healthy-meals-wooden-table-food-delivery-160387494.jpg",
          rating: "4.7/5",
          cuisine: ["Asian", " Italian", " fast food"],
          cost: "420₹",
          estimatedTimeOfArrival: "35 minutes",
          id: 765,
        },
      ],
    },
  },
};

const RestaurantCard = ({
  imageSrc,
  name,
  rating,
  cuisine,
  cost,
  estimatedTimeOfArrival,
}) => {
  // console.log(resList);

  return (
    <div id="restaurantCardID">
      <img id="restaurant-img" src={imageSrc} height="150px"></img>
      <h3 id="name">{name}</h3>
      <p id="rating">{rating}</p>
      <p id="cuisines">{cuisine.join(", ")}</p>
      <p id="cost">{cost}</p>
      <p id="eta">{estimatedTimeOfArrival}</p>
    </div>
  );
};

const SearchBar = () => (
  <div className="search-bar">
    <input id="input-search" type="text"></input>
    <button id="search-btn">Search</button>
  </div>
);
const Body = () => {
  return (
    <div className="body-container">
      <SearchBar />
      <div id="restaurantList">
        {/* <RestaurantCard {...restaurantList.data.cards.card[0]} />

        <RestaurantCard {...restaurantList.data.cards.card[1]} /> */}

        {restaurantList.data.cards.card.map((restForFood) => {
          return <RestaurantCard {...restForFood} key={restForFood.id} />;
        })}
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
