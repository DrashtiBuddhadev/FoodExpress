const RestaurantCard = (props) => {
  const { resData } = props;

  // Safety check to ensure resData exists
  if (!resData) {
    return null; // Return null or a fallback UI if no data is available
  }

  return (
    <div className="res-card">
      <img 
        className="res-img" 
        src={resData.imgsrc || "default_image.jpg"} // Use a default image if imgsrc is undefined
        alt={resData.name || "Restaurant Image"} // Safety check for alt text
      />
      <div className="res-details">
        <h2>{resData.name || "Restaurant Name"}</h2>
        <p>{resData.details || "No details available"}</p> 
        <p>{resData.type || "Cuisine type not available"}</p>
        <p>{resData.place || "Location not available"}</p> 
      </div>
    </div>
  );
};

// Higher-order component to add promoted label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted-card">
        <label className="promoted-label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
