import RestaurantCard from "./RestaurantCard";
import { swiggyRestaurantList } from "../utils/swiggyRestaurantList";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

function filterData(searchTxt, resList) {
  const filterData = resList.filter((restro) => {
    return restro.info.name?.toLowerCase().includes(searchTxt.toLowerCase());
  });

  // console.log(filterData);
  return filterData;
}

const Body = () => {
  // Avoid rendering component ??

  const [searchTxt, setSearchTxt] = useState(""); //

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
    // console.log(json);
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
            if (!allresList) return null; // early return
          }}
        >
          Search
        </button>
      </div>
      <div className="body-container">
        {filteredResList.map((restForFood) => {
          // // if (!allresList) return null; // early return

          if (filteredResList?.length == 0)
            return <h1>No Restaurant matches your search name..</h1>;

          return (
            <RestaurantCard {...restForFood.info} key={restForFood.info?.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
