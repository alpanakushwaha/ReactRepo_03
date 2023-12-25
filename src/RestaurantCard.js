import { CDN_IMG_SRC } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  imgLink,
  name,
  avgRating,
  cuisines,
  costForTwo,
  deliveryTime,
}) => {
  // console.log(resList);

  return (
    <>
      <div id="restaurantCardID">
        <img id="restaurant-img" src={imgLink} height="150px"></img>
        <h3 id="name">{name}</h3>
        <p id="rating">{avgRating}</p>
        <p id="cuisines">{cuisines.join(", ")}</p>
        <p id="cost">{costForTwo}</p>
        <p id="eta">{deliveryTime}</p>
      </div>
    </>
  );
};
export default RestaurantCard;
