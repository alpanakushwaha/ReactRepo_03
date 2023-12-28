import RestaurantCard from "./RestaurantCard";
import { swiggyRestaurantList } from "../utils/swiggyRestaurantList";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

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

  const [resList, setResList] = useState([]);

  // const [searchClicked, setSearchClicked] = useState("false");

  // const [status, setStatus] = useState("loading");

  // empty dependency array=> happens once after render
  // dependency array[searchtext]=> happens once after initial render + everytime serchTxt changes

  // useEffect(() => {
  //   console.log("useEffect body rendering...");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect body rendering...searchtext");
  // }, [searchTxt]);

  // useEffect(() => {
  //   console.log("useEffect body rendering...restaurant");
  // }, [resList]);

  useEffect(() => {
    // ApI call

    getResList();
  }, []);

  async function getResList() {
    const data = await fetch(API_URL);

    const json = await data.json();

    setResList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(json);
  }

  console.log("render");

  return (
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
            const data1 = filterData(searchTxt, resList);
            // console.log("data1: ", data1);
            // console.log(resList);
            // update the state- restaurants
            setResList(data1);
          }}
        >
          Search
        </button>
      </div>
      <div className="body-container">
        {resList.map((restForFood) => {
          return (
            <RestaurantCard {...restForFood.info} key={restForFood.info?.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
