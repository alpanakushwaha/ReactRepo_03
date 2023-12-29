import RestaurantCard from "./RestaurantCard";
import { swiggyRestaurantList } from "../utils/swiggyRestaurantList";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

function filterData(searchTxt, resList) {
  const filterData = resList.filter((restro) => {
    return restro.info.name.includes(searchTxt);
  });

  // console.log(filterData);
  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState(""); //

  // const [resList, setResList] = useState([swiggyRestaurantList.data.cards]);

  const [allresList, setAllResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    // ApI call

    getAllResList();
  }, []);

  async function getAllResList() {
    const data = await fetch(API_URL);

    const json = await data.json();

    setAllResList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(json);
  }

  console.log("render");

  // conditional rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  return allresList.length == 0 ? (
    <Shimmer />
  ) : (
    <>
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
            const data1 = filterData(searchTxt, allresList);
     
            setFilteredResList(data1);
          }}
        >
          Search
        </button>
      </div>
      <div className="body-container">
        {filteredResList.map((restForFood) => {
          return (
            <RestaurantCard {...restForFood.info} key={restForFood.info?.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
