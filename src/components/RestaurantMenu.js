import React, { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [openCategory, setOpenCategory] = useState(null); // State lifted up to parent

  const handleClick = (title) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  if (!resInfo) return <Shimmer />;

  // Extract restaurant details from the JSON structure
  const restaurantDetails = resInfo?.cards[2]?.card?.card?.info || {};

  // Extract menu items safely, accounting for potential undefined values
  const regularCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  let menuItems = [];

  //to find out categories
  const categories = regularCards.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // Find the card that contains itemCards, then extract the items
  regularCards.forEach((card) => {
    if (card?.card?.card?.itemCards) {
      menuItems = [...menuItems, ...card.card.card.itemCards];
    }
  });

  return (
    <div className="restaurantMenu">
      {/* Restaurant Information */}
      <div className="restaurantInfo">
        <h1>{restaurantDetails.name}</h1>
        <p className="infoItem">
          <strong>Timing:</strong> {restaurantDetails.sla?.deliveryTime} mins
        </p>
        <p className="infoItem">
          <strong>Rating:</strong> {restaurantDetails.totalRatingsString}
        </p>
        <p className="infoItem">
          <strong>Cost for Two:</strong> {restaurantDetails.costForTwoMessage}
        </p>
        <p className="infoItem">
          <strong>Cuisines:</strong> {restaurantDetails.cuisines?.join(", ")}
        </p>
        <p className="infoItem">
          <strong>Address:</strong> {restaurantDetails.areaName},{" "}
          {restaurantDetails.city}
        </p>
        <p className="infoItem">
          <strong>Delivery Info:</strong>{" "}
          {restaurantDetails.expectationNotifiers?.[0]?.text}
        </p>
      </div>
      
      {/* Pass openCategory and handleClick as props */}
      <RestaurantCategory
        categories={categories}
        openCategory={openCategory}
        handleClick={handleClick}
      />
    </div>
  );
};

export default RestaurantMenu;
