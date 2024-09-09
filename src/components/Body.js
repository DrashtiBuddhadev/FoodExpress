import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { FaSearch } from "react-icons/fa";
import resObj from "../utils/mockdata";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State functions
  const [restaurants, setRestaurants] = useState(resObj);
  const [searchText, setSearchText] = useState("");
  const [restaurantsFiltered, setRestaurantsFiltered] = useState(resObj);

  // Create a restaurant card component with promoted label in it
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Function to filter top-rated restaurants
  const filterTopRatedRestaurants = () => {
    const filteredRestaurants = restaurants.filter((res) => {
      const rating = parseFloat(res.details.split("⭐ ")[1].split(" ")[0]);
      return rating >= 4.5;
    });
    setRestaurantsFiltered(filteredRestaurants);
  };

  // Function to handle search
  const handleSearch = () => {
    const searchedRestaurants = restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantsFiltered(searchedRestaurants);
  };

  // Effect to update filtered results when restaurants change
  useEffect(() => {
    setRestaurantsFiltered(restaurants);
  }, [restaurants]);

  const onlineStatus = useOnlineStatus();
  console.log("Online status in Body:", onlineStatus);

  if (onlineStatus === false) {
    return <h1>Looks like you are offline.</h1>;
  }

  return (
    <div className="body">
      <div className="search">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch className="search-icon" />
          </button>
        </div>
      </div>
      <div className="filter">
        <span className="filter-text">
          Want to know the top restaurant chains?
        </span>
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top rated Restaurants
        </button>
      </div>
      <div className="resContainer">
        {restaurantsFiltered.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.id}
            key={restaurant.id}
            className="resLink"
          >
            {
              /* if the restaurant is promoted show promoted label */
              restaurant.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
