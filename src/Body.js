import RestaurantCard from "./RestaurantCard";
import { swiggyRestaurantList } from "../utils/swiggyRestaurantList";
import { useState, useEffect } from "react";

function filterData(searchTxt, resList) {
  const filterData = resList.filter((restro) => {
    return restro.card.card.info.name.includes(searchTxt);
  });

  // console.log(filterData);
  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState(""); //

  const [resList, setResList] = useState(swiggyRestaurantList.data.cards);
  // const [searchClicked, setSearchClicked] = useState("false");

  // empty dependency array=> happens once after render
  // dependency array[searchtext]=> happens once after initial render + everytime serchTxt changes

  // useEffect(() => {
  //   console.log("useEffect body rendering...");
  // }, []);
  // useEffect(() => {
  //   console.log("useEffect body rendering...searchtext");
  // }, [searchTxt]);
  useEffect(() => {
    console.log("useEffect body rendering...restaurant");
  }, [resList]);

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
            <RestaurantCard
              {...restForFood.card.card.info}
              key={restForFood.card.card.info.id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Body;
