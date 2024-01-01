import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_SRC } from "../utils/constants";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // const  = params;
  // console.log(params);

  const [restro, setRestro] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestro(json.data);
  }

  return (
    <div>
      <h1>Restaurant id: {resId} </h1>
      <h2>{restro.name}</h2>
      {/* <h2>{restro.cloudinaryImageId}</h2> */}
      <img src={CDN_IMG_SRC + restro.cloudinaryImageId}></img>
    </div>
  );
};

export default RestaurantMenu;
