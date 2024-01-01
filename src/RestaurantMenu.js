import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_SRC } from "../utils/constants";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { restaurantId } = useParams();
  // const  = params;
  // console.log(params);

  const [restro, setRestro] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=310392&catalog_qa=undefined&query=Salad&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("json : ", json);
    console.log("json.data : ", json.data);

    setRestro(json.data);

    console.log("restro : ", restro);

    console.log("setRestro : ", setRestro(json.data));
  }

  return (
    <div>
      <h1>
        Restaurant id: {restro?.cards?.[0]?.card?.card?.info?.restaurantId}
      </h1>
      <h2>{restro?.cards?.[0]?.card?.card?.info?.name}</h2>
      <h2>{restro?.cards?.[0]?.card?.card?.info?.cuisines}</h2>
      <img
        src={
          CDN_IMG_SRC + restro?.cards?.[0]?.card?.card?.info?.cloudinaryImageId
        }
      ></img>
    </div>
  );
};

export default RestaurantMenu;
