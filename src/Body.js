import RestaurantCard from "./RestaurantCard";
import { swiggyRestaurantList } from "../constants";

const SearchBar = () => {
  const searchText = "kfc"; // hard-coded variable

  return (
    <div className="search-bar">
      <input
        id="input-search"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => console.log(e.target.value)}
      ></input>
      <button id="search-btn">Search</button>
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
