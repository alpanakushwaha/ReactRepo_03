import RestaurantCard from "./RestaurantCard";
import { swiggyRestaurantList } from "../constants";
import { useState } from "react";

const SearchBar = () => {
  // const searchText = "kfc"; // hard-coded variable

  const [searchTxt, setSearchTxt] = useState("initial input"); //
  const [searchClicked, setSearchClicked] = useState("false"); //

  return (
    <div className="search-bar">
      <input
        id="input-search"
        type="text"
        placeholder="Search"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
      ></input>
      <h3>{searchClicked}</h3>
      <button
        id="search-btn"
        onClick={() => {
          if (searchClicked == "true") setSearchClicked("false");
          if (searchClicked == "false") setSearchClicked("true");
        }}
      >
        Search
      </button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <SearchBar />
      <div id="restaurantList">
        {/* <RestaurantCard {...restaurantList.data.cards.card[0]} />

        <RestaurantCard {...restaurantList.data.cards.card[1]} /> */}

        {swiggyRestaurantList.data.cards.map((restForFood) => {
          return (
            <RestaurantCard
              {...restForFood.card.card.info}
              key={restForFood.card.card.info.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
