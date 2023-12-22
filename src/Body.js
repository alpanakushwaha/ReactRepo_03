import RestaurantCard from "./RestaurantCard";
import { swiggyRestaurantList } from "../utils/swiggyRestaurantList";
import { useState } from "react";

function filterData(searchTxt, resList) {
  const filterData = resList?.data?.cards?.card?.card?.info?.name?.filter(
    (restroName) => {
      restroName?.includes(searchTxt);
    }
  );

  console.log(filterData)
  // return filterData;
}

const SearchBar = () => {
  // const searchText = "kfc"; // hard-coded variable

  const [searchTxt, setSearchTxt] = useState(); //
  const [searchClicked, setSearchClicked] = useState("false");
  const [resList, setResList] = useState(swiggyRestaurantList);

  // console.log(resList);

  return (
    <div className="search-bar">
      <input
        id="input-search"
        type="text"
        placeholder="Search"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
      ></input>
      <button
        id="search-btn"
        onClick={() => {
          // need to filter the data
          const data = filterData(searchTxt, resList);
          // update the state- restaurants
          setResList(data);
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
